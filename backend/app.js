const studentRoutes = require('./routes/studentRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const feesRoutes = require('./routes/feesRoutes');

app.use('/api/students', studentRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/fees', feesRoutes);
