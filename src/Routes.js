import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
BookingCreate, BookingEdit, BookingView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/BookBikesOnline/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Bookings/view/:id" element={<BookingView {...props} title={'View Booking'} />} />
                        <Route path="Bookings/edit/:id" element={<BookingEdit {...props} title={'Edit Booking'} />} />
                        <Route path="Bookings/create" element={<BookingCreate {...props} title={'Create Booking'} />} />

        </Routes>
    )

};

export default Component;
