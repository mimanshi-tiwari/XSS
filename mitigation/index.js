const express = require('express')

const app = express()

app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'" + 
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" 
    )
    //* ["default-src 'self'"] - by default script will be loaded here and other script will fail as content security policy
    //* ["script-src 'self' http://unsecure.com;" ] - first script will be loaded from self and it will allow unsecure.com s it has be passed as trusted domain. Add ; at end of domain [imp]
    //* 'unsafe-inline' allows inline scipts
    //* 'nonce-randomKey' We can select which script to execute, this will execute scipts only with nonce as randomKey which will act as secret key. Will not execute untrusted script
    //* nonce attribute value will not be visible in dom
    //* Report-only mode headers- report-to default (NEW)/ report-uri URL (OLd), only supported in https
    next()
})

app.use(express.static('public')) //* exposing public folder to access all static files located here

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

const PORT = process.env.PORT || '3000'
app.listen(PORT, () => {
    console.log('listening to PORT, ', PORT)
})