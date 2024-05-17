angular.module('ticketBookingApp', [])
.controller('TicketController', function() {
    var ctrl = this;
    ctrl.from = '';
    ctrl.to = '';
    ctrl.date = '';
    ctrl.class = '';
    ctrl.category = 'GENERAL';
    ctrl.disability = false;
    ctrl.flexibleDate = false;
    ctrl.availableBerth = false;
    ctrl.passConcession = false;
    ctrl.searchResults = [];
    ctrl.totalCost = 0;
    ctrl.seats = 1; // Default number of seats
    ctrl.cost = 500; // Default cost per seat

        // Define available cities
        ctrl.cities = ["New Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh"];

        // Function to filter "To" options based on selected "From" city
        ctrl.filterToOptions = function(city) {
            return city !== ctrl.from;
        };

        // Define Indian states
        ctrl.states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];


    ctrl.search = function() {
        var searchData = {
            from: ctrl.from,
            to: ctrl.to,
            date: ctrl.date,
            class: ctrl.class,
            category: ctrl.category,
            disability: ctrl.disability,
            flexibleDate: ctrl.flexibleDate,
            availableBerth: ctrl.availableBerth,
            passConcession: ctrl.passConcession
        };

        // Simulating search results
        ctrl.searchResults = [
            {
                from: ctrl.from,
                to: ctrl.to,
                departureTime: '08:00 AM',
                arrivalTime: '12:00 PM'
            },
            {
                from: ctrl.from,
                to: ctrl.to,
                departureTime: '02:00 PM',
                arrivalTime: '06:00 PM'
            },
            {
                from: ctrl.from,
                to: ctrl.to,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        ];

        // Calculate total cost based on the number of seats and cost per seat
        ctrl.totalCost = ctrl.seats * ctrl.cost;
    };

    ctrl.redirectToIRCTC = function() {
        window.location.href = 'https://www.irctc.co.in';
    };

    ctrl.dummyPay = function() {
        // This is a dummy function, you can implement the actual payment logic here
        alert('Payment successful!'); // For demonstration purposes
    };
});
