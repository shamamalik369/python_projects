import qrcode


url = "https://www.linkedin.com/in/shama-malik-13a5281b9/"

# Create a QR code object with the URL
qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

# Save the image to a file
img.save("qr_code.png")