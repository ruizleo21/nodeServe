/**
 * Created by siro on 18/07/17.
 */
var hotels = require('./hotels')
var distrito8 = require('./distrito8')

exports.assignRoutes = function (app) {
    app.get('/hotels', hotels.getHotels);
    app.get('/hotels/:hotelId', hotels.getHotel);
    // app.post('/hotels', hotels.addHotel);
    // app.put('/hotels/:hotelId', hotels.updateHotel);
    // app.delete('/hotels/:hotelId', hotels.deleteHotel);
	
	app.get('/distrito8',distrito8.getDistrito8); 
}