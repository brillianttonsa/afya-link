"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calendar, Pill, Activity, Award, Bell, FileText, User, TrendingUp, Clock, AlertCircle, CheckCircle } from 'lucide-react'

export default function PatientDashboard() {
  const [healthScore] = useState(85)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">AfyaLink</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
                <span className="ml-2">Mwangi John</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Karibu, Mwangi John
          </h1>
          <p className="text-gray-600">
            Kitambulisho chako: <span className="font-mono bg-gray-100 px-2 py-1 rounded">afya-mw-001234</span>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hali ya Afya</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{healthScore}%</div>
              <Progress value={healthScore} className="mt-2" />
              <p className="text-xs text-gray-600 mt-2">Nzuri sana!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dawa za Leo</CardTitle>
              <Pill className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/4</div>
              <p className="text-xs text-gray-600 mt-2">Zimesalia 1</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Miadi Ijayo</CardTitle>
              <Calendar className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-600 mt-2">Wiki hii</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pointi za Zawadi</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-gray-600 mt-2">+50 leo</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Muhtasari</TabsTrigger>
            <TabsTrigger value="records">Rekodi</TabsTrigger>
            <TabsTrigger value="medications">Dawa</TabsTrigger>
            <TabsTrigger value="appointments">Miadi</TabsTrigger>
            <TabsTrigger value="health">Afya Yangu</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Shughuli za Hivi Karibuni</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Dawa ya Panadol imetumika</p>
                      <p className="text-sm text-gray-600">Saa 2 zilizopita</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Ukumbusho: Dawa ya jioni</p>
                      <p className="text-sm text-gray-600">Saa 1 zilizopita</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Shinikizo la damu limerekodwa</p>
                      <p className="text-sm text-gray-600">Jana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Reminders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Vikumbusho vya Karibu</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">Dawa ya Metformin</p>
                      <p className="text-sm text-gray-600">Saa 6:00 jioni</p>
                    </div>
                    <Badge variant="secondary">Leo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">Muadi na Dkt. Mwalimu</p>
                      <p className="text-sm text-gray-600">Jumatatu, 10:00 asubuhi</p>
                    </div>
                    <Badge variant="secondary">Kesho</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="font-medium">Kipimo cha sukari</p>
                      <p className="text-sm text-gray-600">Jumanne, 8:00 asubuhi</p>
                    </div>
                    <Badge variant="secondary">Wiki ijayo</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Mwelekeo wa Afya</span>
                </CardTitle>
                <CardDescription>
                  Maendeleo yako ya afya katika wiki 4 zilizopita
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">120/80</div>
                    <p className="text-sm text-gray-600">Shinikizo la Damu</p>
                    <p className="text-xs text-green-600">Kawaida</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <p className="text-sm text-gray-600">Kufuata Dawa</p>
                    <p className="text-xs text-blue-600">Vizuri sana</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">7.2</div>
                    <p className="text-sm text-gray-600">BMI</p>
                    <p className="text-xs text-purple-600">Uzito wa kawaida</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="records" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Rekodi za Matibabu</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Muadi wa Kawaida</h3>
                      <Badge>15 Jan 2024</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Daktari: Dr. Sarah Mwalimu - Hospitali ya Muhimbili</p>
                    <p className="text-sm">Uchunguzi wa kawaida. Hali ya afya nzuri. Endelea na dawa za kisukari.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Kipimo cha Damu</h3>
                      <Badge>10 Jan 2024</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Daktari: Dr. John Massawe - Lab ya Aga Khan</p>
                    <p className="text-sm">Matokeo ya kipimo cha damu. HbA1c: 6.8%. Sukari imepungua vizuri.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Pill className="h-5 w-5" />
                  <span>Dawa Zangu</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Metformin 500mg</h3>
                      <Badge variant="secondary">Kila siku</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Kwa kisukari - Mara 2 kwa siku</p>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Asubuhi ✓</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">Jioni - Bado</Badge>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Lisinopril 10mg</h3>
                      <Badge variant="secondary">Kila siku</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Kwa shinikizo la damu - Mara 1 kwa siku</p>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Asubuhi ✓</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Miadi Yangu</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Muadi na Dkt. Mwalimu</h3>
                      <Badge>Kesho</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Jumatatu, 22 Jan 2024 - 10:00 AM</p>
                    <p className="text-sm">Hospitali ya Muhimbili - Uchunguzi wa kufuatilia</p>
                    <Button size="sm" className="mt-2">Thibitisha</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Kipimo cha Macho</h3>
                      <Badge variant="outline">Wiki ijayo</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Jumamosi, 27 Jan 2024 - 2:00 PM</p>
                    <p className="text-sm">Hospitali ya Aga Khan - Uchunguzi wa macho</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Ufuatiliaji wa Afya</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Rekodi Mpya</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Shinikizo la Damu</span>
                        <Button size="sm" variant="outline">Ongeza</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Sukari ya Damu</span>
                        <Button size="sm" variant="outline">Ongeza</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <span>Uzito</span>
                        <Button size="sm" variant="outline">Ongeza</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Rekodi za Hivi Karibuni</h3>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium">Shinikizo la Damu:</span> 120/80 mmHg
                        <span className="text-gray-500 ml-2">Jana</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Sukari ya Damu:</span> 110 mg/dL
                        <span className="text-gray-500 ml-2">Juzi</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Uzito:</span> 75 kg
                        <span className="text-gray-500 ml-2">Wiki iliyopita</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
