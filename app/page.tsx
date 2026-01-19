import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Award, Clock, Database } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">AfyaLink</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="ghost">Ingia</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700">Jisajili</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Karibu <span className="text-green-600">AfyaLink</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Jukwaa la kidijitali linalokusaidia kupata huduma bora za afya. 
            Rekodi zako za matibabu, vikumbusho vya dawa, na muunganisho na madaktari - kila kitu mahali pamoja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register/patient">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Jisajili kama Mgonjwa
              </Button>
            </Link>
            <Link href="/register/doctor">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Jisajili kama Daktari
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Huduma Zetu za Kipekee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Rekodi za Matibabu</CardTitle>
                <CardDescription>
                  Rekodi zako zote za matibabu mahali pamoja, zinazopatikana popote ulipo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Vikumbusho vya Afya</CardTitle>
                <CardDescription>
                  Pokea vikumbusho vya kutumia dawa, miadi ya daktari na vipimo vya afya
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Muunganisho wa Madaktari</CardTitle>
                <CardDescription>
                  Unganishwa na madaktari waliothibitishwa kutoka hospitali mbalimbali
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Usalama wa Hali ya Juu</CardTitle>
                <CardDescription>
                  Taarifa zako za kibinafsi zinalindwa kwa viwango vya juu vya usalama
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Mfumo wa Zawadi</CardTitle>
                <CardDescription>
                  Pata pointi na zawadi kwa kufuata ratiba za afya kwa ufanisi
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Ufuatiliaji wa Afya</CardTitle>
                <CardDescription>
                  Rekodi hali yako ya afya kama sukari ya damu na shinikizo la damu
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Jinsi Inavyofanya Kazi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jisajili</h3>
              <p className="text-gray-600">
                Jisajili kama mgonjwa au daktari na upate kitambulisho chako cha kipekee
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unganisha</h3>
              <p className="text-gray-600">
                Unganishwa na madaktari na hospitali zinazotumia AfyaLink
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Furahia</h3>
              <p className="text-gray-600">
                Pata huduma bora za afya na fuatilia maendeleo yako ya kiafya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">AfyaLink</span>
              </div>
              <p className="text-gray-400">
                Jukwaa la kidijitali la huduma za afya kwa Watanzania wote.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Huduma</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rekodi za Matibabu</li>
                <li>Vikumbusho vya Afya</li>
                <li>Muunganisho wa Madaktari</li>
                <li>Ufuatiliaji wa Afya</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Msaada</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Maswali Yanayoulizwa Mara kwa Mara</li>
                <li>Wasiliana Nasi</li>
                <li>Msaada wa Kiufundi</li>
                <li>Sera za Faragha</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Wasiliana</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@afyalink.co.tz</li>
                <li>+255 123 456 789</li>
                <li>Dar es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AfyaLink. Haki zote zimehifadhiwa.
            </p>

          </div>
        </div>
      </footer>
    </div>
  )
}
