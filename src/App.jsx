import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Your WhatsApp number (international format)
const WHATSAPP_NUMBER = "+62 813-1548-1787";

function App() {
  // Various state variables to track user frustration journey
  const [stage, setStage] = useState(0);
  const [adClosed, setAdClosed] = useState(false);
  const [cookieClosed, setCookieClosed] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState(0);
  const [chatPopupVisible, setChatPopupVisible] = useState(false);
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [surveyStep, setSurveyStep] = useState(0);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [showVirus, setShowVirus] = useState(false);
  const [showOverheating, setShowOverheating] = useState(false);
  const [showAdBlock, setShowAdBlock] = useState(false);
  const [vibrating, setVibrating] = useState(false);
  const [adInterval, setAdInterval] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hai! 👋 Ada yang bisa saya bantu hari ini?", isBot: true }
  ]);
  const [fakeClock, setFakeClock] = useState(new Date());
  const [skripsiReminder, setSkripsiReminder] = useState(false);
  const [tiktokReminder, setTiktokReminder] = useState(false);
  const [carDiscount, setCarDiscount] = useState(false);
  const [flashingScreen, setFlashingScreen] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState(false);
  
  const buttonRef = useRef(null);
  const audioRef = useRef(null);
  const chatInputRef = useRef(null);
  
  // Update fake clock to show random late times to stress about thesis
  useEffect(() => {
    const interval = setInterval(() => {
      // Random time between 11 PM and 3 AM
      const hour = Math.floor(Math.random() * 5) + 23;
      const minute = Math.floor(Math.random() * 60);
      const newDate = new Date();
      newDate.setHours(hour % 24, minute);
      setFakeClock(newDate);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Restore cookies notice randomly
  useEffect(() => {
    if (cookieClosed && stage > 0) {
      const interval = setInterval(() => {
        if (Math.random() > 0.6) {
          setCookieClosed(false);
        }
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [cookieClosed, stage]);
  
  // Show annoying skripsi reminder
  useEffect(() => {
    if (stage >= 2) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setSkripsiReminder(true);
          
          setTimeout(() => {
            setSkripsiReminder(false);
          }, 5000);
        }
      }, 20000);
      
      return () => clearInterval(interval);
    }
  }, [stage]);
  
  // Show annoying tiktok reminder
  useEffect(() => {
    if (stage >= 2) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setTiktokReminder(true);
          
          setTimeout(() => {
            setTiktokReminder(false);
          }, 6000);
        }
      }, 25000);
      
      return () => clearInterval(interval);
    }
  }, [stage]);
  
  // Show car discount popups
  useEffect(() => {
    if (stage >= 1) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setCarDiscount(true);
          
          setTimeout(() => {
            setCarDiscount(false);
          }, 8000);
        }
      }, 30000);
      
      return () => clearInterval(interval);
    }
  }, [stage]);
  
  // Generate annoying popups at random intervals
  useEffect(() => {
    if (stage >= 1 && stage < 8) {
      const interval = setInterval(() => {
        if (Math.random() > 0.6) {
          setPopupType(Math.floor(Math.random() * 5));
          setPopupVisible(true);
          
          // Auto-close popup after some seconds
          setTimeout(() => {
            setPopupVisible(false);
          }, 6000);
        }
      }, 12000);
      
      return () => clearInterval(interval);
    }
  }, [stage]);
  
  // Flash screen occasionally
  useEffect(() => {
    if (stage >= 3) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setFlashingScreen(true);
          
          setTimeout(() => {
            setFlashingScreen(false);
          }, 500);
        }
      }, 15000);
      
      return () => clearInterval(interval);
    }
  }, [stage]);
  
  // Show device info popup
  useEffect(() => {
    if (stage >= 2) {
      setTimeout(() => {
        setDeviceInfo(true);
        
        setTimeout(() => {
          setDeviceInfo(false);
        }, 8000);
      }, 10000);
    }
  }, [stage]);
  
  // Show chat popup randomly
  useEffect(() => {
    if (stage >= 2 && stage < 8) {
      setTimeout(() => {
        setChatPopupVisible(true);
      }, 5000);
      
      return () => {};
    }
  }, [stage]);
  
  // Create blinking ad intervals
  useEffect(() => {
    if (stage >= 1) {
      const interval = setInterval(() => {
        setAdInterval(Math.floor(Math.random() * 5));
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [stage]);
  
  // Handle progress bar animation
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 98) {
            clearInterval(interval);
            setTimeout(() => {
              setIsLoading(false);
              setError(true);
            }, 500);
            return 98;
          }
          return prev + (Math.random() * 10);
        });
      }, 300);
      
      return () => clearInterval(interval);
    }
  }, [isLoading]);
  
  // Show fake virus and overheating alerts at specific points
  useEffect(() => {
    if (stage === 2 && surveyStep === 2) {
      setTimeout(() => {
        setShowVirus(true);
        // Play alert sound
        if (audioRef.current) {
          audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        
        setTimeout(() => {
          setShowVirus(false);
        }, 7000);
      }, 5000);
    }
    
    if (stage === 4) {
      setTimeout(() => {
        setShowOverheating(true);
        setVibrating(true);
        
        setTimeout(() => {
          setShowOverheating(false);
          setVibrating(false);
        }, 6000);
      }, 5000);
    }
    
    if (stage === 5) {
      setTimeout(() => {
        setShowAdBlock(true);
        
        setTimeout(() => {
          setShowAdBlock(false);
        }, 8000);
      }, 5000);
    }
  }, [stage, surveyStep]);
  
  // Mockery responses based on user information
  const mockeryResponses = [
    "Bagaimana skripsi adsorpsi nitrat Anda? Sudah selesai revisi?",
    "Jangan chatting terus, nanti streak TikTok @larmelar padam lho!",
    "Margonda banjir lagi ya? Hahaha untung saya di Malang.",
    "Nabung berapa tahun lagi nih buat beli Fortuner impian?",
    "FMIPA UB masih ketat ya deadline skripsinya?",
    "Sudah cek kadar nitrat hari ini? Jangan lupa penelitianmu~",
    "Mending fokus skripsi daripada scrolling TikTok terus",
    "BMW atau Land Cruiser ya yang jadi prioritas? Kayaknya masih mimpi deh",
    "Anak Kimia kok malah main website, bukannya ke lab",
    "Streak TikTok @larmelar hari ini sudah diupdate belum?"
  ];
  
  // Car ads content
  const carAds = [
    {
      title: "PROMO FORTUNER 2023!",
      text: "Fortuner impian Anda hanya dengan DP 10%! Kesempatan terbatas!",
      cta: "KLAIM SEKARANG"
    },
    {
      title: "BMW SERIES 3 DISKON 20%",
      text: "BMW mobil impian Anda bisa dimiliki sekarang juga! Stok terbatas!",
      cta: "LIHAT PENAWARAN"
    },
    {
      title: "LAND CRUISER READY STOCK!",
      text: "Land Cruiser siap kirim hari ini juga! Bunga 0% untuk 6 bulan pertama!",
      cta: "HUBUNGI DEALER"
    }
  ];
  
  // Ad texts
  const adTexts = [
    "🔥 DISKON MOBIL FORTUNER 50%! KLIK SEKARANG! 🔥",
    "💰 PROMO BMW SERIES 3 HANYA UNTUK MAHASISWA KIMIA! 💰",
    "⚠️ PERINGATAN: DEADLINE SKRIPSI ADSORPSI NITRAT DIPERCEPAT! ⚠️",
    "🚨 HARGA LAND CRUISER TURUN! KESEMPATAN TERBATAS! 🚨",
    "⏰ @larmelar API TIKTOK HAMPIR PADAM! SEGERA UPDATE! ⏰"
  ];
  
  // Simulate chat responses
  const handleChatSubmit = (e) => {
    e.preventDefault();
    
    if (chatInputRef.current.value.trim()) {
      // Add user message
      setChatMessages(prev => [...prev, { 
        text: chatInputRef.current.value, 
        isBot: false 
      }]);
      chatInputRef.current.value = "";
      
      // Add bot mockery response after delay
      setTimeout(() => {
        const mockery = mockeryResponses[Math.floor(Math.random() * mockeryResponses.length)];
        
        setChatMessages(prev => [...prev, { 
          text: mockery, 
          isBot: true 
        }]);
      }, 1000);
    }
  };
  
  // Handle button escape
  const handleButtonHover = () => {
    if (stage === 3) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 100;
      setButtonPosition({ x, y });
    }
  };
  
  // Progress through the annoying stages
  const advanceStage = () => {
    if (stage < 7) {
      setStage(prev => prev + 1);
    } else {
      // Final stage - trigger WhatsApp call
      makeWhatsAppCall();
    }
  };
  
  // Handle survey buttons
  const handleSurveyButton = (buttonId) => {
    if (!clickedButtons.includes(buttonId)) {
      setClickedButtons(prev => [...prev, buttonId]);
    } else {
      setClickedButtons(prev => prev.filter(id => id !== buttonId));
    }
    
    // Once they've clicked at least one button, wait a moment and advance
    setTimeout(() => {
      setSurveyStep(prev => prev + 1);
      setClickedButtons([]);
    }, 800);
  };
  
  // Handle captcha submission
  const handleCaptchaSubmit = () => {
    setCaptchaAttempts(prev => prev + 1);
    setCaptchaError(true);
    setCaptchaValue("");
    
    // After 2 failed attempts, move to next stage
    if (captchaAttempts >= 1) {
      setTimeout(() => {
        advanceStage();
        setIsLoading(true);
        setLoadingProgress(0);
      }, 500);
    }
  };
  
  // Make WhatsApp call - THE IMPORTANT FUNCTION
  const makeWhatsAppCall = () => {
    // The correct format for WhatsApp call deeplink
    window.location.href = `whatsapp://call?phone=${WHATSAPP_NUMBER}`;
    
    // Fallback in case the first attempt doesn't work
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?call=1`, '_blank');
    }, 1500);
  };
  
  // Custom survey questions specifically for your target
  const surveyQuestions = [
    "Apakah Anda tinggal di Depok Margonda?",
    "Apakah Anda jurusan kimia di fakultas FMIPA?",
    "Apakah Anda kuliah di Universitas Brawijaya Malang?",
    "Apakah Anda suka mobil Fortuner, BMW, dan Land Cruiser?",
    "Apakah Anda memiliki akun TikTok @__azzizah__?",
    "Apakah skripsi Anda tentang adsorpsi nitrat?"
  ];
  
  return (
    <div className={`min-h-screen ${vibrating ? 'vibrating' : ''} ${flashingScreen ? 'bg-white' : 'bg-purple-50'}`}>
      {/* Hidden audio for alerts */}
      <audio ref={audioRef} src="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAABAAABVgANTU1NTU1Q0NDQ0NDUFBQUFBQXl5eXl5ea2tra2tra3l5eXl5eYaGhoaGhpSUlJSUlKGhoaGhoaGvr6+vr6+8vLy8vLzKysrKysrX19fX19fX5eXl5eXl8vLy8vLy////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQCgAAAAAAAAAVY82AhbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAALACwAAP/AADEAAAExTFRDQ0NDQ0NDQ0NDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxA8K0DJIAPpMAAAAA0NEQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND/+MYxBUGkAIWAPgMAAAAQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND" />
      
      {/* Top fake clock */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white px-4 py-1 text-xs z-50 flex justify-between items-center">
        <span>{fakeClock.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        <span className="animate-pulse text-red-500">DEADLINE SKRIPSI: BESOK!</span>
      </div>
      
      {/* Top ad banner */}
      {!adClosed && (
        <div className="ad-banner mt-6">
          <p className="text-sm font-bold animate-blink-fast">{adTexts[adInterval || 0]}</p>
          <button 
            className="absolute right-2 top-2 w-5 h-5 rounded-full bg-white text-black text-xs flex items-center justify-center"
            onClick={() => setAdClosed(true)}
          >
            X
          </button>
        </div>
      )}
      
      {/* Cookie notice */}
      {!cookieClosed && (
        <div className="cookie-notice">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold mb-1">Kami menggunakan cookies! 🍪</h3>
                <p className="text-sm text-gray-600">
                  Dengan melanjutkan menggunakan situs ini, Anda menyetujui penggunaan cookies, pixel, beacon, dan penyimpanan lokal kami.
                </p>
              </div>
              <div className="flex gap-2">
                <button 
                  className="px-4 py-2 bg-annoying-pink text-white rounded font-bold hover:bg-pink-600 animate-pulse"
                  onClick={() => setCookieClosed(true)}
                >
                  Terima Semua
                </button>
                <button 
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  onClick={() => setCookieClosed(true)}
                >
                  Tolak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content area */}
      <div className="flex-1 p-4 max-w-md mx-auto flex flex-col items-center justify-center min-h-screen pt-16">
        {/* Stage 0: Initial screen */}
        {stage === 0 && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-shadow-multiple animate-pulse">Survey FMIPA UB</h1>
            <p className="mb-6">Kami menghargai pendapat mahasiswa jurusan Kimia! Selesaikan survey singkat untuk meningkatkan fasilitas adsorpsi nitrat.</p>
            <button 
              className="px-5 py-2 bg-blue-500 text-white rounded-md animate-bounce-small"
              onClick={() => {
                advanceStage();
                setTimeout(() => {
                  setPopupVisible(true);
                }, 1000);
              }}
            >
              Mulai Survey
            </button>
          </div>
        )}
        
        {/* Stage 1: Cookie notice */}
        {stage === 1 && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            <h2 className="text-xl font-semibold mb-3 animate-wiggle text-annoying-pink">Informasi Privasi</h2>
            <p className="text-sm text-gray-600 mb-4">
              Dengan melanjutkan menggunakan situs ini, Anda menyetujui penggunaan cookies, pixel, beacon, dan penyimpanan lokal kami.
              Kami mengumpulkan data termasuk alamat IP Anda, informasi perangkat, dan perilaku browsing.
            </p>
            <div className="flex flex-wrap gap-2">
              <button 
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => {
                  setSurveyStarted(true);
                  advanceStage();
                }}
              >
                Terima Semua
              </button>
              <button 
                className="flex-1 px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded"
                onClick={() => {
                  setSurveyStarted(true);
                  advanceStage();
                }}
              >
                Tolak Non-Esensial
              </button>
              <button 
                className="w-full mt-2 px-3 py-2 text-sm text-blue-600"
                onClick={() => {
                  setSurveyStarted(true);
                  advanceStage();
                }}
              >
                Atur Preferensi
              </button>
            </div>
          </div>
        )}
        
        {/* Stage 2: Annoying Survey */}
        {stage === 2 && surveyStarted && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Survey Mahasiswa FMIPA</h2>
              <span className="text-sm text-gray-500">Pertanyaan {surveyStep + 1}/6</span>
            </div>
            
            {surveyStep < 6 ? (
              <>
                <p className="mb-4">{surveyQuestions[surveyStep]}</p>
                
                <div className="space-y-2">
                  <button
                    className={`survey-button ${clickedButtons.includes(0) ? 'active' : ''}`}
                    onClick={() => handleSurveyButton(0)}
                  >
                    Ya
                  </button>
                  <button
                    className={`survey-button ${clickedButtons.includes(1) ? 'active' : ''}`}
                    onClick={() => handleSurveyButton(1)}
                  >
                    Tidak
                  </button>
                  
                  {/* Random mobile survey ad */}
                  {surveyStep === 2 && (
                    <div className="border border-gray-300 rounded p-3 mt-4 bg-gray-50 text-xs text-left">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">🚨 Perhatian Mahasiswa Kimia!</span>
                        <button className="text-gray-500">✕</button>
                      </div>
                      <p>Deadline pengumpulan skripsi adsorpsi nitrat dimajukan! Klik untuk info lebih lanjut!</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="mb-4">Terima kasih telah menyelesaikan survey!</p>
                <button
                  className="px-5 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => {
                    advanceStage();
                  }}
                >
                  Lanjutkan
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Stage 3: CAPTCHA and moving button */}
        {stage === 3 && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            <h2 className="text-lg font-semibold mb-4">Verifikasi Anda Manusia</h2>
            
            <div className="mb-4">
              <div className="captcha-container">
                {captchaError && (
                  <p className="text-red-500 text-xs mb-2">Salah, coba lagi</p>
                )}
                <p className="captcha-text">
                  {captchaAttempts === 0 ? "admiralganteng" : "ADMIRALGANTENG"}
                </p>
              </div>
              
              <input
                type="text"
                className="w-full border rounded-md p-2 text-center"
                placeholder="Masukkan karakter di atas"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
              />
            </div>
            
            <motion.button
              ref={buttonRef}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
              animate={{
                x: buttonPosition.x,
                y: buttonPosition.y,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={handleButtonHover}
              onClick={handleCaptchaSubmit}
            >
              Verifikasi
            </motion.button>
          </div>
        )}
        
        {/* Stage 4: Loading & Error */}
        {stage === 4 && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            {isLoading ? (
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-4">Memproses permintaan Anda</h2>
                <div className="progress-bar mb-2">
                  <div 
                    className="progress-bar-fill"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">
                  Mohon tidak menutup jendela ini... {Math.min(99, Math.floor(loadingProgress))}%
                </p>
                
                {/* Fake status messages */}
                <div className="mt-4 text-xs text-left text-gray-500">
                  <p className="animate-pulse">Mengecek status skripsi adsorpsi nitrat...</p>
                  <p className="animate-pulse">Memverifikasi akun TikTok @__azzizah__...</p>
                  <p className="animate-pulse">Menganalisis data kependudukan Depok Margonda...</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-red-500 text-5xl mb-4 animate-bounce-small">⚠️</div>
                <h2 className="text-lg font-semibold text-red-600 mb-2">Error Saat Memproses</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Kami mengalami kesalahan saat memproses permintaan Anda. Silakan coba lagi atau hubungi dukungan.
                </p>
                <div className="text-left text-xs font-mono bg-gray-100 p-3 rounded mb-4 overflow-x-auto">
                  <p>Error ID: NITRATE-ADSORPTION-FAILURE</p>
                  <p>Time: {new Date().toISOString()}</p>
                  <p>Location: Depok Margonda</p>
                  <p>Support: Silakan hubungi tim teknis kami untuk bantuan</p>
                </div>
                <button
                  className="px-5 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => advanceStage()}
                >
                  Coba Lagi
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Stage 5: Browser Issue Screen */}
        {stage === 5 && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            <div className="text-center mb-4">
              <div className="text-yellow-500 text-5xl mb-2">⚠️</div>
              <h2 className="text-lg font-semibold text-yellow-600">Masalah Kompatibilitas Browser</h2>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Browser Anda mungkin tidak kompatibel dengan fitur terbaru kami. Beberapa langkah yang bisa dilakukan:
            </p>
            
            <ul className="list-disc pl-5 text-sm text-gray-600 mb-4 space-y-1">
              <li>Perbarui browser Anda ke versi terbaru</li>
              <li>Aktifkan JavaScript di pengaturan browser</li>
              <li>Nonaktifkan blocker iklan</li>
              <li>Bersihkan cache dan cookie</li>
            </ul>
            
            <div className="border-l-4 border-blue-500 pl-3 py-1 mb-4 text-sm">
              <p className="font-medium">Butuh bantuan dengan pengaturan ini?</p>
              <p className="text-gray-600">Tim kami siap membantu Anda.</p>
            </div>
            
            <button
              className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition mb-3"
              onClick={() => advanceStage()}
            >
              Refresh Halaman
            </button>
            
            <button
              className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
              onClick={() => advanceStage()}
            >
              Hubungi Support
            </button>
          </div>
        )}
        
        {/* Stage 6: Fake Authentication Required */}
        {stage === 6 && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🔒
              </div>
              <h2 className="text-xl font-semibold">Autentikasi Diperlukan</h2>
              <p className="text-sm text-gray-600 mt-1">
                Verifikasi identitas diperlukan untuk mengakses layanan
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center bg-yellow-100 border-l-4 border-yellow-500 p-3 text-sm text-yellow-700">
                <div className="mr-2">⚠️</div>
                <div>
                  <p className="font-medium">Sesi Anda telah habis</p>
                  <p className="text-xs">Mohon verifikasi kembali untuk melanjutkan</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="border rounded p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="text-gray-600">📱</span>
                  </div>
                  <div>
                    <p className="font-medium">Verifikasi melalui WhatsApp</p>
                    <p className="text-xs text-gray-600">Panggilan suara singkat untuk verifikasi</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="border rounded p-3 flex items-center justify-between opacity-50">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="text-gray-600">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Verifikasi Email</p>
                    <p className="text-xs text-gray-600">Tidak tersedia untuk akun Anda</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              </div>
              
              <div className="border rounded p-3 flex items-center justify-between opacity-50">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <span className="text-gray-600">🔑</span>
                  </div>
                  <div>
                    <p className="font-medium">Verifikasi 2FA</p>
                    <p className="text-xs text-gray-600">Tidak dikonfigurasi</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>
            
            <button
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center"
              onClick={() => advanceStage()}
            >
              Lanjutkan dengan Verifikasi
            </button>
          </div>
        )}
        
        {/* Stage 7: Final call to action */}
        {stage === 7 && (
          <div className="border rounded-lg p-5 shadow-md w-full">
            <h2 className="text-lg font-semibold mb-2">Butuh Verifikasi Suara</h2>
            <p className="text-sm text-gray-600 mb-4">
              Sistem kami memerlukan verifikasi suara singkat untuk mengonfirmasi identitas Anda. Ini memerlukan panggilan WhatsApp yang singkat dan aman.
            </p>
            
            <div className="border-l-4 border-green-500 pl-3 py-1 mb-4">
              <p className="text-sm">Tim verifikasi kami siap melakukan panggilan singkat untuk verifikasi.</p>
            </div>
            
            <button
              className="support-button"
              onClick={makeWhatsAppCall}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.03-.7.36-2.96-.73-2.26-1.1-3.83-3.71-3.88-3.83-.05-.12-.28-.59-.01-1.1.27-.51.61-.57.82-.57l.36-.01c.18 0 .35.05.52.35.17.3.57 1.05.66 1.23.08.18.07.31 0 .42-.07.11-.14.17-.21.23l-.18.15c-.11.08-.22.19-.13.38.09.19.4.8.86 1.29.59.64 1.08.91 1.25 1 .17.1.27.08.35-.04.08-.12.35-.48.48-.65.13-.17.23-.15.33-.08z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.93 5.93 1 12 1s11 4.93 11 11-4.93 11-11 11c-1.66 0-3.26-.37-4.68-1.03l-4.29 1.42c-.34.1-.68-.17-.63-.54l.36-2.46C2.61 17.24 1 14.77 1 12zm11 9c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12c0 2.56.97 4.9 2.56 6.66l-.51 3.45 4.56-1.51c1.03.39 2.15.6 3.33.6z"/>
              </svg>
              Mulai Panggilan Verifikasi
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Durasi panggilan rata-rata: &lt;30 detik
            </p>
          </div>
        )}
      </div>
      
      {/* Chat popup */}
      {chatPopupVisible && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Customer Service</span>
            <button onClick={() => setChatPopupVisible(false)}>✕</button>
          </div>
          
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={msg.isBot ? "bot-message" : "user-message"}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <form className="chat-input" onSubmit={handleChatSubmit}>
            <input
              type="text"
              ref={chatInputRef}
              className="flex-1 border-none outline-none"
              placeholder="Ketik pesan..."
            />
            <button type="submit" className="ml-2 text-blue-500">
              Kirim
            </button>
          </form>
        </div>
      )}
      
      {/* Random popups */}
      <AnimatePresence>
        {popupVisible && (
          <div className="popup-container">
            <div className="absolute inset-0" onClick={() => setPopupVisible(false)}></div>
            <div className="popup-content">
              <button 
                className="absolute right-2 top-2 w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs flex items-center justify-center z-10"
                onClick={() => setPopupVisible(false)}
              >
                X
              </button>
              
              {popupType === 0 && (
                <div className="text-center pt-2">
                  <h3 className="text-lg font-semibold mb-2 text-annoying-pink animate-pulse">Penawaran Spesial!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Promo waktu terbatas untuk mahasiswa FMIPA UB! Segera bertindak sebelum waktu habis!
                  </p>
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded"
                      onClick={() => setPopupVisible(false)}
                    >
                      Pelajari Lebih Lanjut
                    </button>
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-600"
                      onClick={() => setPopupVisible(false)}
                    >
                      Tidak, Terima Kasih
                    </button>
                  </div>
                </div>
              )}
              
              {popupType === 1 && (
                <div className="text-center pt-2">
                  <h3 className="text-lg font-semibold mb-2 text-red-500 animate-pulse">Peringatan Skripsi!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Deadline pengumpulan skripsi adsorpsi nitrat dimajukan! Silahkan hubungi dosen pembimbing sekarang juga!
                  </p>
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm bg-red-500 text-white rounded"
                      onClick={() => setPopupVisible(false)}
                    >
                      Hubungi Dosen
                    </button>
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-600"
                      onClick={() => setPopupVisible(false)}
                    >
                      Nanti Saja
                    </button>
                  </div>
                </div>
              )}
              
              {popupType === 2 && (
                <div className="text-center pt-2">
                  <h3 className="text-lg font-semibold mb-2 text-blue-500 animate-pulse">TikTok Alert!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Api TikTok @larmelar hampir padam! Update sekarang untuk menjaga streak!
                  </p>
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded"
                      onClick={() => setPopupVisible(false)}
                    >
                      Buka TikTok
                    </button>
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-600"
                      onClick={() => setPopupVisible(false)}
                    >
                      Abaikan
                    </button>
                  </div>
                </div>
              )}
              
              {popupType === 3 && (
                <div className="text-center pt-2">
                  <h3 className="text-lg font-semibold mb-2 text-amber-500 animate-pulse">Anda Menangkan!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Selamat! Anda terpilih untuk memenangkan diskon pembelian mobil Fortuner!
                  </p>
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded"
                      onClick={() => setPopupVisible(false)}
                    >
                      Klaim Hadiah
                    </button>
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-600"
                      onClick={() => setPopupVisible(false)}
                    >
                      Tolak
                    </button>
                  </div>
                </div>
              )}
              
              {popupType === 4 && (
                <div className="text-center pt-2">
                  <h3 className="text-lg font-semibold mb-2 text-purple-500 animate-pulse">Flash Sale BMW!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Harga BMW Series 3 turun drastis! Kesempatan terbatas untuk 10 pembeli pertama!
                  </p>
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm bg-purple-500 text-white rounded"
                      onClick={() => setPopupVisible(false)}
                    >
                      Lihat Penawaran
                    </button>
                    <button 
                      className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-600"
                      onClick={() => setPopupVisible(false)}
                    >
                      Nanti Saja
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Skripsi reminder */}
      <AnimatePresence>
        {skripsiReminder && (
          <div className="fixed top-10 left-0 right-0 mx-auto max-w-xs bg-red-500 text-white p-3 rounded-lg shadow-lg z-50 animate-bounce-small">
            <div className="flex items-center">
              <div className="text-xl mr-3">⚠️</div>
              <div>
                <h4 className="font-bold">Pengingat Skripsi!</h4>
                <p className="text-sm">Jangan lupa deadline adsorpsi nitrat minggu ini!</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      {/* TikTok reminder */}
      <AnimatePresence>
        {tiktokReminder && (
          <div className="fixed bottom-20 left-0 right-0 mx-auto max-w-xs bg-blue-500 text-white p-3 rounded-lg shadow-lg z-50 animate-pulse-fast">
            <div className="flex items-center">
              <div className="text-xl mr-3">🔥</div>
              <div>
                <h4 className="font-bold">Streak @larmelar!</h4>
                <p className="text-sm">TikTok streak hampir padam! Update sekarang!</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Car discount popup */}
      <AnimatePresence>
        {carDiscount && (
          <div className="fixed bottom-24 right-4 w-64 bg-white rounded-lg shadow-lg border border-yellow-500 p-3 z-50">
            <div className="absolute top-0 right-0 transform -translate-y-3 -translate-x-3 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center animate-pulse">
              1
            </div>
            <div className="flex items-start mb-2">
              <div className="text-amber-500 text-xl mr-2">🚗</div>
              <div>
                <h4 className="font-bold text-sm">{carAds[Math.floor(Math.random() * carAds.length)].title}</h4>
                <p className="text-xs text-gray-600">{carAds[Math.floor(Math.random() * carAds.length)].text}</p>
              </div>
            </div>
            <button 
              className="w-full py-1.5 text-xs bg-amber-500 text-white rounded"
              onClick={() => setCarDiscount(false)}
            >
              {carAds[Math.floor(Math.random() * carAds.length)].cta}
            </button>
          </div>
        )}
      </AnimatePresence>
      
      {/* Virus alert popup */}
      <AnimatePresence>
        {showVirus && (
          <div className="fixed inset-0 flex items-center justify-center z-90">
            <div className="virus-alert alert-banner max-w-md">
              <div className="flex items-start">
                <div className="text-4xl mr-4 animate-pulse">⚠️</div>
                <div>
                  <h2 className="text-xl font-bold mb-2">PERINGATAN VIRUS TERDETEKSI!</h2>
                  <p className="text-sm mb-3">
                    Sistem kami mendeteksi virus berbahaya di perangkat Anda! Data skripsi adsorpsi nitrat Anda berisiko! 
                    Tindakan segera diperlukan!
                  </p>
                  <button 
                    className="w-full py-2 bg-white text-red-600 font-bold rounded"
                    onClick={() => setShowVirus(false)}
                  >
                    PINDAI & BERSIHKAN SEKARANG
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Overheating alert popup */}
      <AnimatePresence>
        {showOverheating && (
          <div className="fixed inset-0 flex items-center justify-center z-90">
            <div className="overheat-alert alert-banner max-w-md">
              <div className="flex items-start">
                <div className="text-4xl mr-4 animate-pulse">🔥</div>
                <div>
                  <h2 className="text-xl font-bold mb-2">PERINGATAN PANAS BERLEBIH!</h2>
                  <p className="text-sm mb-3">
                    iPhone 13 Anda terlalu panas! CPU: 94°C / RAM: 98% / Baterai: Kritis
                    Tutup aplikasi TikTok untuk mencegah kerusakan!
                  </p>
                  <button 
                    className="w-full py-2 bg-white text-orange-600 font-bold rounded"
                    onClick={() => setShowOverheating(false)}
                  >
                    SELESAIKAN MASALAH
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      {/* AdBlock alert popup */}
      <AnimatePresence>
        {showAdBlock && (
          <div className="fixed inset-0 flex items-center justify-center z-90">
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-xl">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 text-blue-500">🛡️</div>
                <div>
                  <h2 className="text-xl font-bold mb-1">AdBlock Terdeteksi</h2>
                  <p className="text-sm text-gray-600">
                    Kami mendeteksi Anda menggunakan AdBlock. Untuk mengakses konten ini, nonaktifkan AdBlock.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 pb-2">
                <p className="text-sm text-gray-600 mb-4">
                  Iklan membantu kami menyediakan informasi gratis tentang:
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                  <li>Promo mobil Fortuner, BMW, dan Land Cruiser</li>
                  <li>Update skripsi adsorpsi nitrat</li>
                  <li>Bantuan menjaga api TikTok @larmelar</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <button 
                  className="flex-1 py-2 bg-blue-500 text-white rounded font-medium"
                  onClick={() => setShowAdBlock(false)}
                >
                  Nonaktifkan AdBlock
                </button>
                <button 
                  className="flex-1 py-2 border border-gray-300 text-gray-700 rounded font-medium"
                  onClick={() => setShowAdBlock(false)}
                >
                  Lanjutkan dengan AdBlock
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Device info popup */}
      <AnimatePresence>
        {deviceInfo && (
          <div className="fixed top-1/4 left-0 right-0 mx-auto w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-90">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold">Informasi Perangkat Terdeteksi</h3>
              <button 
                className="text-gray-500"
                onClick={() => setDeviceInfo(false)}
              >
                ✕
              </button>
            </div>
            <div className="text-sm space-y-1 mb-3">
              <p>Perangkat: <span className="font-medium">iPhone 13</span></p>
              <p>Lokasi: <span className="font-medium">Kos Pink, Jl. Kertosari No. 15 Ketawagede HAHAHAHAHA WKWKWKWKWK</span></p>
              <p>Universitas: <span className="font-medium">Brawijaya Malang</span></p>
              <p>Fakultas: <span className="font-medium">FMIPA</span></p>
              <p>Jurusan: <span className="font-medium">Kimia</span></p>
              <p>Topik Skripsi: <span className="font-medium">Adsorpsi Nitrat</span></p>
              <p>Akun TikTok: <span className="font-medium">@__azzizah__</span></p>
              <p>Mobil Impian: <span className="font-medium">Fortuner, BMW, Land Cruiser</span></p>
            </div>
            <button 
              className="w-full py-2 bg-red-500 text-white rounded-lg text-sm"
              onClick={() => setDeviceInfo(false)}
            >
              Hapus Informasi Saya
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;