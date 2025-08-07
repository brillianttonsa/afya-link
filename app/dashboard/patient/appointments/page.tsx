"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ArrowLeft, CalendarIcon, Clock, MapPin, User, Phone, Plus, CheckCircle, XCircle } from 'lucide-react'

export default function PatientAppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/patient" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span>Rudi Dashibodi</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-gray-900">AfyaLink</span>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Ombea Muadi
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Miadi Yangu</h1>
          <p className="text-gray-600">Fuatilia miadi yako ya madaktari na hospitali</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Kalenda ya Miadi</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>

          {/* Appointments */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upcoming" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upcoming">Zijazo</TabsTrigger>
                <TabsTrigger value="past">Zilizopita</TabsTrigger>
                <TabsTrigger value="cancelled">Zilizoghairiwa</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                {/* Next Appointment */}
                <Card className="border-l-4 border-l-green-500 bg-green-50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Muadi wa Kufuatilia</CardTitle>
                        <CardDescription className="mt-1">
                          Uchunguzi wa maendeleo ya kisukari
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Kesho</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>Jumatatu, 22 Januari 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>10:00 AM - 10:30 AM</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>Dkt. Sarah Mwalimu</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Hospitali ya Muhimbili</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-500">Chumba:</span>
                          <span>205, Ghorofa ya 2</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>+255 22 215 0302</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Maelekezo:</strong> Leta matokeo ya vipimo vya damu na orodha ya dawa unazotumia. 
                        Fika dakika 15 kabla ya wakati.
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Thibitisha
                      </Button>
                      <Button size="sm" variant="outline">
                        Badilisha Wakati
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <XCircle className="h-4 w-4 mr-2" />
                        Ghairi
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Uchunguzi wa Macho</CardTitle>
                        <CardDescription className="mt-1">
                          Uchunguzi wa kawaida wa macho
                        </CardDescription>
                      </div>
                      <Badge variant="outline">Wiki ijayo</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>Jumamosi, 27 Januari 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>2:00 PM - 2:30 PM</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>Dkt. Mary Kileo</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Hospitali ya Aga Khan</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-500">Idara:</span>
                          <span>Macho</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Ona Maelezo
                      </Button>
                      <Button size="sm" variant="outline">
                        Badilisha
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Vipimo vya Damu</CardTitle>
                        <CardDescription className="mt-1">
                          HbA1c na lipid profile
                        </CardDescription>
                      </div>
                      <Badge variant="outline">Mwezi ujao</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>Jumatano, 15 Februari 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>8:00 AM - 8:30 AM</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>Lab ya Muhimbili</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Hospitali ya Muhimbili</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-500">Aina:</span>
                          <span>Vipimo vya Lab</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Maelekezo:</strong> Funga chakula kwa masaa 12 kabla ya kipimo. 
                        Maji tu yanaruhusiwa.
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Ona Maelezo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Uchunguzi wa Kawaida</CardTitle>
                        <CardDescription className="mt-1">
                          Uchunguzi wa afya ya jumla
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Imekamilika</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>Jumanne, 15 Januari 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>10:00 AM - 10:45 AM</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>Dkt. Sarah Mwalimu</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Hospitali ya Muhimbili</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Imekamilika</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Matokeo:</strong> Uchunguzi umekamilika. Dawa mpya zimetolewa na 
                        muadi wa kufuatilia umepangwa.
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Ona Ripoti
                      </Button>
                      <Button size="sm" variant="outline">
                        Panga Muadi Mwingine
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Vipimo vya Damu</CardTitle>
                        <CardDescription className="mt-1">
                          Kipimo cha sukari na cholesterol
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Imekamilika</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>Jumamosi, 10 Januari 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>8:00 AM - 8:15 AM</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Lab ya Aga Khan</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Matokeo Yamepatikana</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Ona Matokeo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cancelled" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Uchunguzi wa Moyo</CardTitle>
                        <CardDescription className="mt-1">
                          ECG na echo cardiogram
                        </CardDescription>
                      </div>
                      <Badge variant="destructive">Imeghairiwa</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          <span>Ijumaa, 5 Januari 2024</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>3:00 PM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <User className="h-4 w-4 text-gray-500" />
                          <span>Dkt. Ahmed Hassan</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>Hospitali ya Aga Khan</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span>Imeghairiwa na Mgonjwa</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Sababu:</strong> Mgonjwa alikuwa na shughuli za dharura. 
                        Muadi mpya unahitajika.
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Panga Upya
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
