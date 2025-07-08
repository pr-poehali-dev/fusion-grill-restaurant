import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-elegant text-2xl font-bold text-amber-400">
            Фьюжн на углях
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#concept"
              className="hover:text-amber-400 transition-colors"
            >
              Концепция
            </a>
            <a href="#menu" className="hover:text-amber-400 transition-colors">
              Меню
            </a>
            <a
              href="#gallery"
              className="hover:text-amber-400 transition-colors"
            >
              Галерея
            </a>
            <a
              href="#events"
              className="hover:text-amber-400 transition-colors"
            >
              События
            </a>
            <a
              href="#booking"
              className="hover:text-amber-400 transition-colors"
            >
              Бронирование
            </a>
            <a
              href="#contacts"
              className="hover:text-amber-400 transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Забронировать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/img/88b86d06-3692-4346-8113-ffa519ccf535.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-elegant text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Фьюжн на углях
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Микс европейских и азиатских техник • Открытый огонь • Фермерские
            продукты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать стол
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-3"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Посмотреть меню
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-amber-400" size={32} />
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-5xl font-bold mb-6 text-amber-400">
              Наша концепция
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Мы объединяем лучшие традиции европейской и азиатской кухни,
              готовя на открытом огне из отборных фермерских продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-600 rounded-full flex items-center justify-center">
                  <Icon name="Flame" className="text-white" size={32} />
                </div>
                <CardTitle className="font-elegant text-2xl text-amber-400">
                  Открытый огонь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Каждое блюдо готовится на живом огне, что придает неповторимый
                  вкус и аромат
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-600 rounded-full flex items-center justify-center">
                  <Icon name="Utensils" className="text-white" size={32} />
                </div>
                <CardTitle className="font-elegant text-2xl text-amber-400">
                  Фьюжн-кухня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Гармоничное сочетание европейских и азиатских кулинарных
                  традиций
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-600 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" size={32} />
                </div>
                <CardTitle className="font-elegant text-2xl text-amber-400">
                  Фермерские продукты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Только свежие, отборные ингредиенты от проверенных поставщиков
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-5xl font-bold mb-6 text-amber-400">
              Меню & Wine Pairing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Авторские блюда с профессиональным подбором вин
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Menu Items */}
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-600 text-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-elegant text-xl font-semibold text-amber-400">
                      Стейк из мраморной говядины
                    </h3>
                    <span className="text-amber-400 font-bold">2,890₽</span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    На углях с азиатскими специями и европейским соусом
                  </p>
                  <Badge className="bg-amber-600 text-white">
                    Wine Pairing
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-600 text-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-elegant text-xl font-semibold text-amber-400">
                      Тигровые креветки терияки
                    </h3>
                    <span className="text-amber-400 font-bold">1,590₽</span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Гриль на углях с японским соусом и французскими травами
                  </p>
                  <Badge className="bg-amber-600 text-white">
                    Wine Pairing
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-600 text-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-elegant text-xl font-semibold text-amber-400">
                      Дегустационный сет "Путешествие углей"
                    </h3>
                    <span className="text-amber-400 font-bold">4,500₽</span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    7 блюд с винными парами от сомелье
                  </p>
                  <Badge className="bg-amber-600 text-white">Premium Set</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/img/57d92155-4c44-4d14-bbb9-7a20d8e0bfa4.jpg"
                alt="Fusion cuisine"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-amber-600 text-white mb-2">
                  AR-Сомелье
                </Badge>
                <p className="text-white text-sm">
                  Используйте QR-код для интерактивной винной карты
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-5xl font-bold mb-6 text-amber-400">
              Галерея
            </h2>
            <p className="text-xl text-gray-300">Атмосфера нашего ресторана</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <img
                src="/img/88b86d06-3692-4346-8113-ffa519ccf535.jpg"
                alt="Restaurant interior"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/img/57d92155-4c44-4d14-bbb9-7a20d8e0bfa4.jpg"
                alt="Dish presentation"
                className="w-full h-36 object-cover rounded-lg"
              />
              <div className="bg-slate-700 p-6 rounded-lg h-36 flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="Play"
                    className="mx-auto mb-2 text-amber-400"
                    size={32}
                  />
                  <p className="text-amber-400 font-semibold">Видео-тур</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-5xl font-bold mb-6 text-amber-400">
              События
            </h2>
            <p className="text-xl text-gray-300">
              Особенные моменты в нашем ресторане
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Icon name="ChefHat" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-elegant text-xl text-amber-400">
                      Мастер-класс "Огонь и нож"
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Каждую субботу в 15:00
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Научитесь готовить на углях вместе с нашим шеф-поваром
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Icon name="Wine" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-elegant text-xl text-amber-400">
                      Винные дегустации
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Каждый четверг в 19:00
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Эксклюзивные дегустации с сомелье и закусками
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-5xl font-bold mb-6 text-amber-400">
              Бронирование с "эффектом присутствия"
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Инновационная система бронирования позволяет почувствовать
              атмосферу ресторана заранее
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-400">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-400">
                      Телефон
                    </label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-400">
                      Дата
                    </label>
                    <Input
                      type="date"
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-400">
                      Время
                    </label>
                    <Input
                      type="time"
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-400">
                      Гостей
                    </label>
                    <Input
                      type="number"
                      placeholder="2"
                      min="1"
                      max="12"
                      className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-amber-400">
                    Особые пожелания
                  </label>
                  <Textarea
                    placeholder="Расскажите о ваших предпочтениях..."
                    className="bg-slate-600 border-slate-500 text-white placeholder-gray-400"
                    rows={3}
                  />
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Забронировать с эффектом присутствия
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-sm">
                    Получите 360° preview вашего стола и атмосферы ресторана
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-5xl font-bold mb-6 text-amber-400">
              Контакты
            </h2>
            <p className="text-xl text-gray-300">Найдите нас в сердце города</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-400 mb-1">Адрес</h3>
                  <p className="text-gray-300">
                    ул. Гастрономическая, 15
                    <br />
                    Москва, 125009
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Clock" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-400 mb-1">
                    Время работы
                  </h3>
                  <p className="text-gray-300">
                    Пн-Чт: 12:00 - 24:00
                    <br />
                    Пт-Сб: 12:00 - 02:00
                    <br />
                    Вс: 12:00 - 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-400 mb-1">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-600">
              <h3 className="font-elegant text-2xl font-semibold text-amber-400 mb-6">
                Доставка "как в зале"
              </h3>
              <p className="text-gray-300 mb-6">
                Уникальная доставка с сохранением температуры и презентации блюд
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Truck" className="text-amber-400" size={20} />
                  <span className="text-gray-300">
                    Доставка в течение 45 минут
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="Thermometer"
                    className="text-amber-400"
                    size={20}
                  />
                  <span className="text-gray-300">
                    Температурные контейнеры
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Star" className="text-amber-400" size={20} />
                  <span className="text-gray-300">Ресторанная подача дома</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">
                Заказать доставку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="font-elegant text-3xl font-bold text-amber-400 mb-4">
              Фьюжн на углях
            </div>
            <p className="text-gray-400 mb-6">
              Авторская кухня • Открытый огонь • Незабываемые впечатления
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Фьюжн на углях. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
