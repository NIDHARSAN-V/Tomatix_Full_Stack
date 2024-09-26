import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "welcomes",
                appFeatureText: "Your go-to platform for all things tomato! Discover an extensive range of tomato varieties with detailed care instructions, manage your fertilizer needs effortlessly, and access real-time insights to optimize your cultivation practices. Engage with our interactive tools to get personalized recommendations and stay updated with expert tips. Dive in now and transform your tomato farming experience with Tomatix!",
                appFeatureHeader: "Welcome to Tomatix",
                sellTomatoes: "Sell Tomatoes",
                kg: "Kg",
                rs: "Rs",
                noTomato: "No tomatoes available",
                bigOrders: "Only big Orders",
                tomatoOrderName: "Tomato Order Name",
                quantity: "Quantity",
                pricePerKg: "Price per Kg",
                state: "State",
                contact: "Contact",
                submit: "Submit",
                addFertilizer: "Add Fertilizer",
                noFertilizer: "No fertilizers available",
                fertilizerName: "Fertilizer Name",
                description: "Description",
                unable:"Unable to fetch weather data",
                currentWeather:"Current Weather",
                yourLocation:"Your Location",
                weatherCondition:"Weather Condition",
                temperature:"Temperature",
            },
        },
        ta: {
            translation: {
                welcome: "வணக்கம்",
                appFeatureText: "தக்காளி எல்லாவற்றுக்கும் நீங்கள் செல்லக்கூடிய தளம்! விரிவான பராமரிப்பு வழிமுறைகளுடன் விரிவான அளவிலான தக்காளி வகைகளைக் கண்டறியவும், உங்கள் உரத் தேவைகளை சிரமமின்றி நிர்வகிக்கவும் மற்றும் உங்கள் சாகுபடி நடைமுறைகளை மேம்படுத்த நிகழ்நேர நுண்ணறிவுகளை அணுகவும். தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெற எங்கள் ஊடாடும் கருவிகளுடன் ஈடுபடவும் மற்றும் நிபுணர் உதவிக்குறிப்புகளுடன் புதுப்பித்த நிலையில் இருக்கவும். இப்போது முழுக்கு மற்றும் உங்கள் தக்காளி விவசாய அனுபவத்தை Tomatix உடன் மாற்றவும்!",
                appFeatureHeader: "Tomatix-க்கு வரவேற்கிறோம்",
                sellTomatoes: "தக்காளியை விற்கவும்",
                kg: "கிலோ",
                rs: "ரூ",
                noTomato: "தக்காளி கிடைக்கவில்லை",
                bigOrders: "பெரிய ஆர்டர்கள் மட்டுமே",
                tomatoOrderName: "தக்காளி ஆர்டர் பெயர்",
                quantity: "அளவு",
                pricePerKg: "ஒரு கிலோக்கு விலை",
                state: "மாநிலம்",
                contact: "தொடர்பு",
                submit: "சமர்ப்பிக்கவும்",
                addFertilizer: "உரம் சேர்க்கவும்",
                noFertilizer: "உரங்கள் கிடைக்கவில்லை",
                fertilizerName: "உரம் பெயர்",
                description: "விளக்கம்",
                unable:"வானிலை செய்திகளைப் பெற முடியவில்லை",
                currentWeather:"தற்போதைய வானிலைवर्तमान मौसम",
                yourLocation:"உங்கள் இருப்பிடம்",
                weatherCondition:"வானிலை நிலவரம்",
                temperature:"வெப்பநிலை",
            }
        },
        hi: {
            translation: {
                welcome: "नमस्कार",
                appFeatureText: "टमाटर की सभी चीजों के लिए आपका गो-टू प्लेटफॉर्म! विस्तृत देखभाल निर्देशों के साथ टमाटर की किस्मों की एक विस्तृत श्रृंखला की खोज करें, अपनी उर्वरक आवश्यकताओं को सहजता से प्रबंधित करें, और अपनी खेती प्रथाओं को अनुकूलित करने के लिए वास्तविक समय की अंतर्दृष्टि तक पहुंचें। वैयक्तिकृत अनुशंसाएँ प्राप्त करने और विशेषज्ञ युक्तियों से अपडेट रहने के लिए हमारे इंटरैक्टिव टूल से जुड़ें। अभी गोता लगाएँ और टोमैटिक्स के साथ अपने टमाटर की खेती के अनुभव को बदल दें!",
                appFeatureHeader: "Tomatix में आपका स्वागत है",
                sellTomatoes: "टमाटर बेचें",
                kg: "किलोग्राम",
                rs: "रु",
                noTomato: "कोई टमाटर उपलब्ध नहीं है",
                bigOrders: "केवल बड़े आदेश",
                tomatoOrderName: "टमाटर ऑर्डर का नाम",
                quantity: "मात्रा",
                pricePerKg: "प्रति किलोग्राम कीमत",
                state: "राज्य",
                contact: "संपर्क करें",
                submit: "जमा करें",
                addFertilizer: "उर्वरक जोड़ें",
                noFertilizer: "कोई उर्वरक उपलब्ध नहीं है",
                fertilizerName: "उर्वरक का नाम",
                description: "विवरण",
                unable:"मौसम डेटा लाने में असमर्थ",
                currentWeather:"वर्तमान मौसम",
                yourLocation:"आपका स्थान",
                weatherCondition:"मौसम की स्थिति",
                temperature:"तापमान",
            }
        }
        
    },
    lng: "ta",  // Set default language
    fallbackLng: "en",  // Fallback to English if translation not found
    interpolation: {
        escapeValue: false, 
    }
});
