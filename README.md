# Kendime README
**Ne yaptım? Ne devam ediyor? Loglama - Kontrol**

## Devam Eden
### 28.01.2026
1. AI avatar ekranı mesaj geldikçe aynı yerinde kalmıyor büyük sorun
2. AI avatar ekranı ve chat ekranı bi oransız gereksiz yer kullanımı var bunu düzeltmek gerek
3. Scroll eh işte ama bottom send butonunun sayfanın dibine sabit olması büyük saçmalık
4. Portlar sağlam 3000-3020 arası komple mc-api'de
5. Avatar -> Video Canvas gerekli (bunu nasıl o ekrana sokacağım ben de merak ediyorum)
6. TTS -> Avatar sesi
7. Conversation Memory (llama2 bildiğin Alzheimer!)

## Yapılan
### 25.01.2026
1. Skeletal dosya hazırlığı
2. Klasör iskelet hazır
3. Temel Node pluginleri çekildi
4. Git Repo hazır.
5. /health -> Server durumu
6. /api/decision -> Decision Object oluşturuldu (mock)
7. /api/decision/:id/approve -> HITL onayı
8. Plugin Kontrolü ve hata yönetimi ( AVV_ERR_PLUGIN_NOT_VALID)
9. Mock Decision DB test hazırlığı
10. Örnek payload'lar (Architech, Traid, Writer)

### 28.01.2026
1. Ollama bağlandı!
2. Container ve Network tekrar düzenlendi
3. UI scrollbar problemi geçici olarak düzeltildi (scroll var ama bi tuhaf)
4. localhost:3000/health çalışıyor ancak /status 404 not found veriyor.
5. ** İyi olan**: Docker mc-api container'ı çalıştığı sürece AI - Chatbot hiçbirşeye ihtiyacı olmadan http:\\localhost:3000 ile açılıyor.

6. Local Service - Ollama / llama2 çalışıyor sonraki adımda bunu api içine gömülebilecek birşeye çevirmem lazım. Ama şimdilik işler tıkırında :)
