const config = {
	dbUrl:
		process.env.DB_URL ||
		'mongodb+srv://empire:4V4XyMh8nK4sjJ2@cluster0-4m1ii.gcp.mongodb.net/test?retryWrites=true&w=majority',
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'hhtp://localhost',
	publicRoute: process.env.PUBLIC_ROUTE || '/app'
};

module.exports = config;
