package com.flight.bookingdetails.service;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;

import com.flight.bookingdetails.model.Booking;

public interface BookingService extends MongoRepository<Booking, Long>{

	public ResponseEntity<Booking> createBooking(Booking newBooking);

	public Booking updateBooking(Booking newBooking);

	public String deleteBooking(BigInteger bookingId);

	public Iterable<Booking> displayAllBooking();

	public ResponseEntity<?> findBookingById(BigInteger bookingId);
	
}