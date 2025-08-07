"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Calendar, FileText, Search, Plus, User, Bell, Activity, Clock, TrendingUp } from 'lucide-react'

export default function DoctorDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

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
                <span className="ml-2">Dkt. Sarah Mwalimu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Karibu, Dkt. Sarah Mwalimu
          </h1>
          <p className="text-gray-600">
            Hospitali ya Muhimbili - Idara ya Magonjwa ya Ndani
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wagonjwa wa Leo</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-600 mt-2">+2 kuliko jana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Miadi ya Wiki</CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-gray-600 mt-2">85% imehudhuriwa</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wagonjwa Wote</CardTitle>
              <Activity className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-gray-600 mt-2">Wanaofuatiliwa</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ripoti za Leo</CardTitle>
              <FileText className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-600 mt-2">Zimeandikwa</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Wagonjwa</TabsTrigger>
            <TabsTrigger value="appointments">Miadi</TabsTrigger>
            <TabsTrigger value="records">Rekodi</TabsTrigger>
            <TabsTrigger value="analytics">Takwimu</TabsTrigger>
          </TabsList>

          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Wagonjwa Wangu</span>
                  </CardTitle>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Sajili Mgonjwa Mpya
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <Search className="h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Tafuta mgonjwa kwa jina au kitambulisho..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Mwangi John Kamau</h3>
                        <p className="text-sm text-gray-600">ID: afya-mw-001234</p>
                        <p className="text-sm text-gray-600">Umri: 45, Jinsia: Mwanaume</p>
                        <div className="flex space-x-2 mt-2">
                          <Badge variant="secondary">Kisukari</Badge>
                          <Badge variant="secondary">Shinikizo la Damu</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Muadi wa mwisho</p>
                        <p className="text-sm font-medium">15 Jan 2024</p>
                        <Button size="sm" className="mt-2">Ona Rekodi</Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Fatuma Ali Hassan</h3>
                        <p className="text-sm text-gray-600">ID: afya-fa-005678</p>
                        <p className="text-sm text-gray-600">Umri: 32, Jinsia: Mwanamke</p>
                        <div className="flex space-x-2 mt-2">
                          <Badge variant="secondary">Mimba</Badge>
                          <Badge className="bg-green-100 text-green-800">Afya Nzuri</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Muadi wa mwisho</p>
                        <p className="text-sm font-medium">18 Jan 2024</p>
                        <Button size="sm" className="mt-2">Ona Rekodi</Button>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Mohamed Said Juma</h3>
                        <p className="text-sm text-gray-600">ID: afya-ms-009876</p>
                        <p className="text-sm text-gray-600">Umri: 58, Jinsia: Mwanaume</p>
                        <div className="flex space-x-2 mt-2">
                          <Badge variant="secondary">Moyo</Badge>
                          <Badge className="bg-yellow-100 text-yellow-800">Ufuatiliaji</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Muadi wa mwisho</p>
                        <p className="text-sm font-medium">20 Jan 2024</p>
                        <Button size="sm" className="mt-2">Ona Rekodi</Button>
                      </div>
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
                  <span>Miadi ya Leo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Mwangi John Kamau</h3>
                        <p className="text-sm text-gray-600">10:00 AM - Uchunguzi wa kufuatilia</p>
                        <p className="text-sm text-gray-600">Kisukari na shinikizo la damu</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Amefika</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Fatuma Ali Hassan</h3>
                        <p className="text-sm text-gray-600">11:30 AM - Uchunguzi wa mimba</p>
                        <p className="text-sm text-gray-600">Miezi 6 ya mimba</p>
                      </div>
                      <Badge variant="outline">Anasubiri</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Mohamed Said Juma</h3>
                        <p className="text-sm text-gray-600">2:00 PM - Uchunguzi wa moyo</p>
                        <p className="text-sm text-gray-600">Kufuatilia baada ya upasuaji</p>
                      </div>
                      <Badge variant="secondary">Baadaye</Badge>
                    </div>
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
                  <span>Rekodi za Hivi Karibuni</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Ripoti ya Matibabu - Mwangi John</h3>
                      <Badge>Leo</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Uchunguzi wa kufuatilia wa kisukari</p>
                    <p className="text-sm">HbA1c: 6.8% (kuboresha), Shinikizo: 130/85 (kufuatilia). Endelea na dawa za sasa.</p>
                    <Button size="sm" variant="outline" className="mt-2">Hariri</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Ripoti ya Mimba - Fatuma Ali</h3>
                      <Badge>Jana</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Uchunguzi wa kawaida wa mimba</p>
                    <p className="text-sm">Mimba inaendelea vizuri. Mtoto anakua kwa kawaida. Vitamini vimeongezwa.</p>
                    <Button size="sm" variant="outline" className="mt-2">Hariri</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Takwimu za Wagonjwa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Kisukari</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Shinikizo la Damu</span>
                      <span className="font-semibold">32%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Magonjwa ya Moyo</span>
                      <span className="font-semibold">18%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mengineyo</span>
                      <span className="font-semibold">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Shughuli za Wiki</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Miadi iliyohudhuriwa</span>
                      <span className="font-semibold">38/45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Wagonjwa wapya</span>
                      <span className="font-semibold">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ripoti zilizoandikwa</span>
                      <span className="font-semibold">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dawa zilizotolewa</span>
                      <span className="font-semibold">156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
