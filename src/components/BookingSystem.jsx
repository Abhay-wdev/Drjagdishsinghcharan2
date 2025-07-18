'use client';

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig'; // Import Firestore instance
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import emailjs from 'emailjs-com';

const BookingSystem = () => {
  // State management
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [firestoreReady, setFirestoreReady] = useState(false);
  // Add these state variables for validation
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Check if we're on client side and set Firestore as ready
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFirestoreReady(true);
    }
  }, []);

  // Consultation hours for Dr. Jagdish Singh Charan
  const consultationHours = {
    0: { // Sunday
      start: '10:00',
      end: '21:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    },
    1: { // Monday
      start: '17:00',
      end: '20:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    },
    2: { // Tuesday
      start: '17:00',
      end: '20:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    },
    3: { // Wednesday
      start: '17:00',
      end: '20:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    },
    4: { // Thursday
      start: '17:00',
      end: '20:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    },
    5: { // Friday
      start: '17:00',
      end: '20:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    },
    6: { // Saturday
      start: '17:00',
      end: '20:00',
      isClosed: false,
      location: "1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004"
    }
  };

  // Fetch booked slots from Firestore
  const fetchBookedSlots = async (date) => {
    if (!firestoreReady || !db) {
      console.warn("Firestore not ready yet");
      return;
    }
    
    try {
      const q = query(collection(db, "bookings"), where("date", "==", date));
      const querySnapshot = await getDocs(q);
      const booked = [];
      querySnapshot.forEach((doc) => {
        booked.push(doc.data().timeSlot);
      });
      setBookedSlots(booked);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setErrorMessage("Failed to fetch booked slots. Please try again.");
    }
  };

  // Format time to 12-hour format with AM/PM
  const formatTime = (time24h) => {
    const [hours, minutes] = time24h.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Generate time slots in 15-minute intervals
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let current = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);

    while (current < end) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      const timeSlot = `${hours}:${minutes}`;
      slots.push(timeSlot);
      
      // Add 15 minutes
      current.setMinutes(current.getMinutes() + 15);
    }
    
    return slots;
  };

  // Update available time slots based on date
  useEffect(() => {
    if (selectedDate && firestoreReady) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();

      // Check if the selected day is closed
      const hours = consultationHours[dayOfWeek];
      
      if (hours.isClosed) {
        setAvailableSlots(['Closed']);
        return;
      }
      
      let slots = [];
      
      if (hours.start && hours.end) {
        slots = [...slots, ...generateTimeSlots(hours.start, hours.end)];
      }
      
      setAvailableSlots(slots);
      fetchBookedSlots(selectedDate);
    } else {
      setAvailableSlots([]);
    }
  }, [selectedDate, firestoreReady]);

  // Get minimum date (2 days from now)
  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 1); // At least one day in advance
    return minDate.toISOString().split('T')[0];
  };

  // Get consultation location based on date
  const getConsultationLocation = () => {
    if (!selectedDate) return '';
    
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return consultationHours[dayOfWeek].location;
  };

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      setNameError('Full Name is required');
      return false;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError('Name should only contain letters and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      setPhoneError('Phone Number is required');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone Number should be 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      setEmailError('Email Address is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid Email Address');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!firestoreReady || !db) {
      setErrorMessage("Database connection is not ready. Please refresh the page and try again.");
      return;
    }
    
    if (!selectedDate || !selectedSlot || !fullName || !phoneNumber || !email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    
    if (selectedSlot === 'Closed') {
      setErrorMessage("The selected day is closed for consultations.");
      return;
    }
    
    if (bookedSlots.includes(selectedSlot)) {
      setErrorMessage("This time slot is already booked. Please select another slot.");
      return;
    }
    
    const isNameValid = validateName(fullName);
    const isPhoneValid = validatePhone(phoneNumber);
    const isEmailValid = validateEmail(email);
    
    if (!isNameValid || !isPhoneValid || !isEmailValid) {
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Add booking to Firestore
      await addDoc(collection(db, "bookings"), {
        date: selectedDate,
        timeSlot: selectedSlot,
        fullName,
        phoneNumber,
        email,
        location: getConsultationLocation(),
        createdAt: new Date().toISOString(),
        status: "pending"
      });

      // Send notification to doctor
      const doctorTemplateParams = {
        patient_name: fullName,
        patient_email: email,
        patient_phone: phoneNumber,
        date: new Date(selectedDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        time: formatTime(selectedSlot),
        location: getConsultationLocation(),
        booking_time: new Date().toLocaleString()
      };

      await emailjs.send(
        "service_es8gfsa",
        "template_xpkxocr",
        doctorTemplateParams,
        "-Ik9ACjlNBUiyy8FL"
      );

      // Reset form
      setSelectedSlot('');
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setMessage("Booking successful! We will send a confirmation to your email shortly. Please arrive 15 minutes before your scheduled appointment time.");
      
      window.scrollTo(0, 0);
      fetchBookedSlots(selectedDate);
    } catch (error) {
      console.error("Error adding booking or sending email:", error);
      setErrorMessage("Booking was successful but we encountered an issue notifying the doctor. Please contact the clinic directly to verify your appointment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg text-green-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-green-700">Book Your Consultation with Dr. Jagdish Singh Charan (Spine & Orthopedic Surgeon)</h1>
      
      {!firestoreReady && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          Connecting to booking system... Please wait.
        </div>
      )}
      
      {message && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          {message}
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 text-green-800 rounded-md">
        <h3 className="font-bold text-lg mb-2">Appointment Guidelines:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Please arrive 15 minutes before your scheduled appointment</li>
          <li>Bring any previous medical reports, X-rays, or test results</li>
          <li>A confirmation email will be sent within 24 hours of booking</li>
          <li>Rescheduling requires at least 24 hours notice</li>
          <li>Consultation duration is approximately 15-20 minutes</li>
          <li>Please enter a valid email to receive a confirmation email.</li>
        </ul>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div className='w-[100%] flex flex-col justify-center items-center  '>
          <div>
          <label className="block text-red-600 font-bold mb-2">
            Please Select Date for Your Consultation*
          </label>
          <input
            type="date"
            min={getMinDate()}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="shadow border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
            placeholder='dd-mm-yyyy'
          /></div>
        </div>
        
        {/* Time Slot Selection */}
        {selectedDate && availableSlots.length > 0 && (
          <div>
            <label className="block text-black font-bold mb-2">
              Select Time Slot*
            </label>
            {availableSlots[0] === 'Closed' ? (
              <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md">
                <p className="font-medium">Clinic Closed on this day.</p>
                <p className="text-sm mt-1">Please select another date for your appointment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    disabled={bookedSlots.includes(slot)}
                    className={`py-3 px-2 text-sm border rounded-md transition-all ${
                      selectedSlot === slot
                        ? 'bg-gradient-to-r from-green-100 to-blue-100 text-green-600 font-semibold shadow-md'
                        : bookedSlots.includes(slot)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {formatTime(slot)}
                    {bookedSlots.includes(slot) && (
                      <span className="block text-xs font-medium mt-1">Booked</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Personal Information */}
        {selectedSlot && selectedSlot !== 'Closed' && (
          <div className="space-y-4">
            <div className="p-4 bg-green-100 border border-green-200 text-green-800 rounded-md mb-4">
              <p className="font-medium">Your appointment details:</p>
              <p className="mt-1">
                <span className="font-bold">Clinic</span> appointment on{' '}
                <span className="font-bold">{new Date(selectedDate).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</span> at{' '}
                <span className="font-bold">{formatTime(selectedSlot)}</span>
              </p>
              <p className="text-sm mt-1">{getConsultationLocation()}</p>
            </div>
            
            {/* Full Name Input */}
            <div>
              <label className="block text-black font-bold mb-2">
                Full Name*
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
                  setFullName(value);
                  validateName(value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>
            
            {/* Phone Number Input */}
            <div>
              <label className="block text-black font-bold mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Allow only digits
                  setPhoneNumber(value);
                  validatePhone(value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g. 9876543210"
                maxLength="10" // Limit to 10 digits
                required
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>
            
            <div>
              <label className="block text-black font-bold mb-2">
                Email Address*
              </label>
              <input
                type="email"
                value={email}
                placeholder='Please enter a valid email to receive a confirmation email.'
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !firestoreReady}
              className={`w-full py-3 px-4 rounded-md cursor-pointer transition-all ${
                isLoading || !firestoreReady
                  ? 'bg-gradient-to-r from-green-200 to-blue-200 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-green-600 hover:bg-green-600 text-white'
              } font-bold text-lg shadow-md`}
            >
              {isLoading ? 'Processing...' : 'Confirm Appointment'}
            </button>
            
            <p className="text-center text-sm text-black mt-2">
              You will receive a confirmation via SMS and email.
            </p>
          </div>
        )}
      </form>

      <div className="p-4 mt-6 bg-gradient-to-r from-green-100 to-blue-100 bg-opacity-20 rounded-md text-green-800">
          <h3 className="font-bold text-lg mb-2">Dr. Jagdish Singh Charan Clinic</h3>
          <p className="mb-1">1/9, PNB Marg, B Block, housing board, Panchsheel Nagar, Ajmer, Rajasthan 305004</p>
          <p className="mb-1">Phone: 080034 74733</p>
          <p className="font-medium mt-2">Consultation Hours:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Sunday: 10AM - 9PM</li>
            <li>Monday to Saturday: 5PM - 8PM</li>
          </ul>
        </div>
    </div>
  );
};

export default BookingSystem;