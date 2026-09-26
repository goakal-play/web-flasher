const dictionary = {
  id: {
    pageTitle: "AKAL Plays ESP Web Flasher",

    subtitle: `
            Flash firmware ESP32-S2 dan ESP8266 langsung melalui browser.
            <br>
            Pastikan firmware yang dipilih sesuai dengan PS4 kalian.
        `,

    preparationTitle: "Persiapan:",

    preparation: `
            1. Hubungkan board melalui USB.<br>
            2. Khusus ESP32 S2 perlu masuk ke flash mode dulu dengan tekan tombol BOOT dan Reset bersamaan lalu lepas.<br>
            3. Tekan tombol Connect & Flash.<br>
            4. Pilih port serial board Anda.
        `,

    firmwareTitle: "Pilih Versi Firmware:",

    firmwareV1: "7.00 - 13.00 (GH)",
    firmwareV2: "13.02 - 13.52 (RG)",
    firmwareV3: "7.00 - 13.52 (GH)",

    webkitInfo: "Webkit: RG = RawGame, GH = GamerHack",

    connectFlash: "Connect & Flash",

    ready: "Siap. Hubungkan ESP dan mulai flashing...",

    connecting: "Connecting...",
    erasing: "Erasing...",

    flashing: "Memulai flashing firmware, Silahkan tunggu...",
    doNotDisconnect: "Mohon jangan mencabut kabel USB.",

    eraseMessage: "Menghapus seluruh isi flash...",

    success: "[BERHASIL] Flashing selesai!",

    resetMessage:
      "Tekan tombol Reset pada ESP, lalu buka 10.1.1.1 di browser untuk menggunakan WebKit.",

    settingMessage:
      "Buka 10.1.1.1/setting untuk mengganti nama dan password WiFi, memperbarui GoldHEN, serta mengubah background.",

    registrationMessage:
      "Untuk registrasi awal kirimkan ID Chip yang tampil di halaman regis atau di bawah ke https://t.me/yayatpy",

    selectFirmwareError: "Pilih versi firmware dulu!",

    browserError:
      "[ERROR] Browser tidak mendukung Web Serial API!\n" +
      "Gunakan Google Chrome atau Microsoft Edge di komputer.",

    unsupportedChip:
      "Chip tidak didukung. Hanya ESP8266 dan ESP32-S2 yang didukung.\n" +
      "Chip terdeteksi: ",

    firmwareNotFound: "Firmware tidak ditemukan: ",

    firmwareEmpty: "File firmware kosong.",

    firmwareVersionError: "Versi firmware tidak tersedia untuk chip ini.",

    detectedChip: "Chip terdeteksi: ",

    selectedFirmware: "Firmware yang dipilih: ",

    errorText: "Error",
    chipIdLabel: "Chip ID: ",

    chipIdError: "[ERROR] Gagal membaca Chip ID: ",

    logReady: "Siap. Hubungkan ESP dan mulai flashing... ",

    footer: "© 2026 - AKAL Plays ESP Web Flasher",

    languageButton: "Language: EN",
  },

  en: {
    pageTitle: "AKAL Plays ESP Web Flasher",

    subtitle: `
            Flash ESP32-S2 and ESP8266 firmware directly through your browser.
            <br>
            Make sure the selected firmware is compatible with your PS4.
        `,

    preparationTitle: "Preparation:",

    preparation: `
            1. Connect the board via USB.<br>
            2. For ESP32 S2, enter flash mode first by pressing the BOOT and Reset buttons together, then release them.<br>
            3. Click Connect & Flash.<br>
            4. Select your board's serial port.
        `,

    firmwareTitle: "Select Firmware Version:",

    firmwareV1: "7.00 - 13.00 (GH)",
    firmwareV2: "13.02 - 13.52 (RG)",
    firmwareV3: "7.00 - 13.52 (GH)",

    webkitInfo: "Webkit: RG = RawGame, GH = GamerHack",

    connectFlash: "Connect & Flash",

    ready: "Ready. Connect your ESP and start flashing...",

    connecting: "Connecting...",
    erasing: "Erasing...",

    flashing: "Flashing firmware, please wait...",
    doNotDisconnect: "Please do not disconnect the USB cable.",

    eraseMessage: "Erasing the entire flash...",

    success: "[SUCCESS] Flashing completed!",

    resetMessage:
      "Press the Reset button on the ESP, then open 10.1.1.1 in your browser to use the WebKit.",

    settingMessage:
      "Go to 10.1.1.1/setting to change the WiFi name and password, update GoldHEN, and change the background.",

    registrationMessage:
      "For initial registration, send the Chip ID shown on the registration page or below to https://t.me/yayatpy",

    selectFirmwareError: "Please select a firmware version first!",

    browserError:
      "[ERROR] Your browser does not support the Web Serial API!\n" +
      "Please use Google Chrome or Microsoft Edge on a computer.",

    unsupportedChip:
      "Unsupported chip. Only ESP8266 and ESP32-S2 are supported.\n" +
      "Detected chip: ",

    firmwareNotFound: "Firmware not found: ",

    firmwareEmpty: "Firmware file is empty.",

    firmwareVersionError:
      "This firmware version is not available for this chip.",

    detectedChip: "Detected chip: ",

    selectedFirmware: "Selected firmware: ",

    errorText: "Error",
    chipIdLabel: "Chip ID: ",

    chipIdError: "[ERROR] Failed to read Chip ID: ",

    logReady: "Ready. Connect the ESP and start flashing... ",

    footer: "© 2026 - AKAL Plays ESP Web Flasher",

    languageButton: "Bahasa: ID",
  },
};

export default dictionary;
