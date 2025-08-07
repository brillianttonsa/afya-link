import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, User, UserCheck } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <Heart className="h-10 w-10 text-green-600" />
            <span className="text-3xl font-bold text-gray-900">AfyaLink</span>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Chagua Aina ya Akaunti</CardTitle>
            <CardDescription>
              Chagua aina ya akaunti unayotaka kuunda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Patient Registration */}
              <Link href="/register/patient">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-green-200">
                  <CardHeader className="text-center">
                    <User className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">Mgonjwa</CardTitle>
                    <CardDescription className="text-left space-y-2">
                      <p>• Rekodi za matibabu zako</p>
                      <p>• Vikumbusho vya dawa</p>
                      <p>• Ufuatiliaji wa afya</p>
                      <p>• Muunganisho na madaktari</p>
                      <p>• Mfumo wa zawadi</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Jisajili kama Mgonjwa
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Doctor Registration */}
              <Link href="/register/doctor">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-blue-200">
                  <CardHeader className="text-center">
                    <UserCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">Daktari</CardTitle>
                    <CardDescription className="text-left space-y-2">
                      <p>• Usimamizi wa wagonjwa</p>
                      <p>• Kuingiza rekodi za matibabu</p>
                      <p>• Ufuatiliaji wa maendeleo</p>
                      <p>• Muunganisho wa hospitali</p>
                      <p>• Ripoti za kiafya</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Jisajili kama Daktari
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Una akaunti tayari?{" "}
                <Link href="/login" className="text-green-600 hover:underline font-medium">
                  Ingia hapa
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
