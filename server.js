const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');

const app = express();
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'client')));

// ✅ USAR PUERTO DINÁMICO (importante para Render)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`El servidor inició correctamente con el puerto ${PORT}`);
});

// Tus rutas de descarga (igual)
app.get('/downloadmp4', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, { format: 'mp4' }).pipe(res);
});

app.get('/downloadmp3', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
    ytdl(URL, { format: 'mp3' }).pipe(res);
});
