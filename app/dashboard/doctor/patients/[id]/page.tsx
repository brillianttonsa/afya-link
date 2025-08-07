"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, ArrowLeft, User, Calendar, FileText, Pill, Activity, Plus, Edit, Save } from 'lucide-react'

export default function PatientDetailPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [newNote, setNewNote] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/doctor" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span>Rudi Dashibodi</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-gray-900">AfyaLink</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Panga Muadi
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Ongeza Rekodi
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Patient Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Mwangi John Kamau</h1>
                  <p className="text-gray-600">ID: afya-mw-001234</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <span>Umri: 45 miaka</span>
                    <span>Jinsia: Mwanaume</span>
                    <span>Aina ya Damu: O+</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Badge variant="secondary">Kisukari</Badge>
                    <Badge variant="secondary">Shinikizo la Damu</Badge>
                    <Badge className="bg-green-100 text-green-800">Mgonjwa wa Kudumu</Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Muadi wa Mwisho</p>
                <p className="font-semibold">20 Januari 2024</p>
                <p className="text-sm text-gray-600 mt-1">Muadi Unaofuata</p>
                <p className="font-semibold text-green-600">22 Januari 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Details Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Muhtasari</TabsTrigger>
            <TabsTrigger value="history">Historia</TabsTrigger>
            <TabsTrigger value="medications">Dawa</TabsTrigger>
            <TabsTrigger value="vitals">Vipimo</TabsTrigger>
            <TabsTrigger value="notes">Maelezo</TabsTrigger>
            <TabsTrigger value="sharing">Ushirikiano</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Current Health Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Hali ya Afya ya Sasa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-gray-600">Shinikizo la Damu</p>
                      <p className="text-lg font-semibold text-red-600">140/90</p>
                      <p className="text-xs text-red-600">Juu ya kawaida</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-gray-600">HbA1c</p>
                      <p className="text-lg font-semibold text-yellow-600">7.8%</p>
                      <p className="text-xs text-yellow-600">Inahitaji kuboresha</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">BMI</p>
                      <p className="text-lg font-semibold text-green-600">24.1</p>
                      <p className="text-xs text-green-600">Kawaida</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Uzito</p>
                      <p className="text-lg font-semibold text-blue-600">75.2 kg</p>
                      <p className="text-xs text-blue-600">Imepungua</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Medications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Pill className="h-5 w-5" />
                    <span>Dawa za Sasa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Metformin 500mg</p>
                      <p className="text-sm text-gray-600">Mara 2 kwa siku</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Inaendelea</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Lisinopril 10mg</p>
                      <p className="text-sm text-gray-600">Mara 1 kwa siku</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Inaendelea</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Aspirin 75mg</p>
                      <p className="text-sm text-gray-600">Mara 1 kwa siku</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Kwa muda</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Shughuli za Hivi Karibuni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Muadi wa Kufuatilia</p>
                      <p className="text-sm text-gray-600">20 Januari 2024 - Uchunguzi wa kisukari na shinikizo la damu</p>
                      <p className="text-sm text-blue-600">Dawa mpya zimetolewa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Activity className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Vipimo vya Lab</p>
                      <p className="text-sm text-gray-600">18 Januari 2024 - HbA1c, Lipid profile</p>
                      <p className="text-sm text-green-600">Matokeo yamepatikana</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <FileText className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Ripoti ya Matibabu</p>
                      <p className="text-sm text-gray-600">15 Januari 2024 - Ripoti ya uchunguzi wa kufuatilia</p>
                      <p className="text-sm text-yellow-600">Inahitaji kufuatiliwa</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historia ya Matibabu</CardTitle>
                <CardDescription>Rekodi kamili za matibabu za mgonjwa huyu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-green-500 pl-4 py-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Uchunguzi wa Kufuatilia</h4>
                      <span className="text-sm text-gray-500">20 Jan 2024</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Matatizo:</strong> Uchovu, kiu kali, mkojo mwingi
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Utambuzi:</strong> Kisukari cha aina ya 2, Shinikizo la damu
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Matibabu:</strong> Ongezwa dozi ya Metformin, Lisinopril imeanza
                    </p>
                  </div>

                  <div className="border-l-4 border-l-blue-500 pl-4 py-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Vipimo vya Damu</h4>
                      <span className="text-sm text-gray-500">18 Jan 2024</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Vipimo:</strong> HbA1c, Lipid profile, Kidney function
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Matokeo:</strong> HbA1c 7.8%, Cholesterol 210 mg/dL, Creatinine normal
                    </p>
                  </div>

                  <div className="border-l-4 border-l-purple-500 pl-4 py-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Utambuzi wa Kwanza</h4>
                      <span className="text-sm text-gray-500">15 Dec 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Matatizo:</strong> Uchovu mkuu, kupungua uzito, kiu kali
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Utambuzi:</strong> Kisukari cha aina ya 2 (mpya)
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Matibabu:</strong> Metformin 500mg mara 1 kwa siku, mafunzo ya lishe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Usimamizi wa Dawa</CardTitle>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Ongeza Dawa
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Active Medications */}
                <div>
                  <h3 className="font-semibold mb-4 text-green-700">Dawa za Sasa</h3>
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Metformin 500mg</h4>
                            <p className="text-sm text-gray-600">Kwa kisukari cha aina ya 2</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Badge className="bg-green-100 text-green-800">Inaendelea</Badge>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Dozi:</strong> 1 kidonge, mara 2 kwa siku</p>
                            <p><strong>Wakati:</strong> Asubuhi na jioni</p>
                            <p><strong>Pamoja na:</strong> Chakula</p>
                          </div>
                          <div>
                            <p><strong>Kuanza:</strong> 15 Dec 2023</p>
                            <p><strong>Kufuata:</strong> 95% (wiki hii)</p>
                            <p><strong>Muadi wa kufuatilia:</strong> 22 Jan 2024</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Lisinopril 10mg</h4>
                            <p className="text-sm text-gray-600">Kwa shinikizo la damu</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Badge className="bg-green-100 text-green-800">Inaendelea</Badge>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Dozi:</strong> 1 kidonge, mara 1 kwa siku</p>
                            <p><strong>Wakati:</strong> Asubuhi</p>
                            <p><strong>Pamoja na:</strong> Maji</p>
                          </div>
                          <div>
                            <p><strong>Kuanza:</strong> 20 Jan 2024</p>
                            <p><strong>Kufuata:</strong> 98% (wiki hii)</p>
                            <p><strong>Muadi wa kufuatilia:</strong> 22 Jan 2024</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Medication History */}
                <div>
                  <h3 className="font-semibold mb-4 text-gray-700">Historia ya Dawa</h3>
                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-gray-400 opacity-75">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Metformin 500mg (Dozi ya awali)</h4>
                            <p className="text-sm text-gray-600">Mara 1 kwa siku</p>
                          </div>
                          <Badge variant="secondary">Imebadilishwa</Badge>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p><strong>Muda:</strong> 15 Dec 2023 - 20 Jan 2024</p>
                          <p><strong>Sababu ya kubadilisha:</strong> Dozi haikutosha kudhibiti sukari</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vitals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rekodi za Vipimo</CardTitle>
                <CardDescription>Vipimo vya afya vya mgonjwa katika miezi 3 iliyopita</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Latest Vitals */}
                  <div>
                    <h3 className="font-semibold mb-4">Vipimo vya Hivi Karibuni</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-sm text-gray-600">Shinikizo la Damu</p>
                        <p className="text-2xl font-bold text-red-600">140/90</p>
                        <p className="text-xs text-red-600">Juu ya kawaida</p>
                        <p className="text-xs text-gray-500 mt-1">20 Jan 2024</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-sm text-gray-600">Sukari ya Damu</p>
                        <p className="text-2xl font-bold text-yellow-600">145</p>
                        <p className="text-xs text-yellow-600">mg/dL</p>
                        <p className="text-xs text-gray-500 mt-1">20 Jan 2024</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-sm text-gray-600">Uzito</p>
                        <p className="text-2xl font-bold text-green-600">75.2</p>
                        <p className="text-xs text-green-600">kg</p>
                        <p className="text-xs text-gray-500 mt-1">20 Jan 2024</p>
                      </div>
                      <div className="p-4 border rounded-lg text-center">
                        <p className="text-sm text-gray-600">BMI</p>
                        <p className="text-2xl font-bold text-green-600">24.1</p>
                        <p className="text-xs text-green-600">Kawaida</p>
                        <p className="text-xs text-gray-500 mt-1">20 Jan 2024</p>
                      </div>
                    </div>
                  </div>

                  {/* Vitals History */}
                  <div>
                    <h3 className="font-semibold mb-4">Historia ya Vipimo</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">18 Januari 2024</p>
                          <p className="text-sm text-gray-600">Shinikizo: 135/88, Sukari: 140 mg/dL, Uzito: 75.5 kg</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Wastani</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">15 Januari 2024</p>
                          <p className="text-sm text-gray-600">Shinikizo: 145/95, Sukari: 155 mg/dL, Uzito: 76.0 kg</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">Juu</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">10 Januari 2024</p>
                          <p className="text-sm text-gray-600">Shinikizo: 150/98, Sukari: 160 mg/dL, Uzito: 76.8 kg</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">Juu sana</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Maelezo ya Daktari</CardTitle>
                  <Button 
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "default" : "outline"}
                  >
                    {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                    {isEditing ? "Hifadhi" : "Hariri"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Note */}
                {isEditing && (
                  <div className="space-y-4">
                    <Label htmlFor="newNote">Ongeza Maelezo Mapya</Label>
                    <Textarea
                      id="newNote"
                      placeholder="Andika maelezo yako hapa..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      rows={4}
                    />
                    <Button className="bg-green-600 hover:bg-green-700">
                      Ongeza Maelezo
                    </Button>
                  </div>
                )}

                {/* Existing Notes */}
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4 py-3 bg-blue-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Maelezo ya Muadi - 20 Jan 2024</h4>
                      <span className="text-sm text-gray-500">Dkt. Sarah Mwalimu</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Mgonjwa anaonyesha maendeleo mazuri katika kudhibiti uzito lakini bado ana changamoto 
                      na shinikizo la damu. Ameongezwa dawa ya Lisinopril. Ameshauriwa kuongeza mazoezi 
                      na kupunguza chumvi katika chakula. Muadi wa kufuatilia baada ya wiki 2.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-green-500 pl-4 py-3 bg-green-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Maelezo ya Vipimo - 18 Jan 2024</h4>
                      <span className="text-sm text-gray-500">Lab Technician</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Matokeo ya vipimo yanaonyesha HbA1c ya 7.8% - imeongezeka kidogo kutoka kipimo 
                      cha mwisho. Kidney function ni normal. Cholesterol bado ni juu (210 mg/dL). 
                      Inapendekezwa kuongeza dozi ya Metformin na kuanza statin.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-purple-500 pl-4 py-3 bg-purple-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Utambuzi wa Kwanza - 15 Dec 2023</h4>
                      <span className="text-sm text-gray-500">Dkt. Sarah Mwalimu</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Mgonjwa mpya wa kisukari. Ameonyesha dalili za kisukari kwa miezi 3. 
                      Random glucose 280 mg/dL, HbA1c 9.2%. Ameanza matibabu ya Metformin na 
                      mafunzo ya lishe. Familia ina historia ya kisukari. Ameshauriwa kufuata 
                      ratiba ya chakula na mazoezi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sharing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ushirikiano wa Rekodi</CardTitle>
                <CardDescription>Shiriki rekodi za mgonjwa na hospitali nyingine</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Sharing Permissions */}
                <div>
                  <h3 className="font-semibold mb-4">Ruhusa za Ushirikiano</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Hospitali ya Aga Khan</p>
                        <p className="text-sm text-gray-600">Ruhusa ya kuona rekodi zote</p>
                        <p className="text-xs text-gray-500">Imetolewa: 10 Jan 2024</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">Inatumika</Badge>
                        <Button size="sm" variant="outline">Sitisha</Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Kliniki ya Upanga</p>
                        <p className="text-sm text-gray-600">Ruhusa ya kuona rekodi za kisukari tu</p>
                        <p className="text-xs text-gray-500">Imetolewa: 5 Jan 2024</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">Inatumika</Badge>
                        <Button size="sm" variant="outline">Sitisha</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share with New Hospital */}
                <div>
                  <h3 className="font-semibold mb-4">Shiriki na Hospitali Mpya</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hospitalName">Jina la Hospitali</Label>
                        <Input id="hospitalName" placeholder="Ingiza jina la hospitali" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctorName">Jina la Daktari</Label>
                        <Input id="doctorName" placeholder="Ingiza jina la daktari" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Aina ya Rekodi za Kushirikishwa</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="allRecords" className="rounded" />
                          <Label htmlFor="allRecords">Rekodi zote za matibabu</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="medications" className="rounded" />
                          <Label htmlFor="medications">Dawa na matibabu</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="labResults" className="rounded" />
                          <Label htmlFor="labResults">Matokeo ya vipimo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="vitals" className="rounded" />
                          <Label htmlFor="vitals">Vipimo vya afya</Label>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-green-600 hover:bg-green-700">
                      Toa Ruhusa ya Ushirikiano
                    </Button>
                  </div>
                </div>

                {/* QR Code for Quick Access */}
                <div>
                  <h3 className="font-semibold mb-4">QR Code ya Haraka</h3>
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">QR Code</span>
                    </div>
                    <div>
                      <p className="font-medium">Kodi ya Haraka ya Mgonjwa</p>
                      <p className="text-sm text-gray-600">
                        Hospitali nyingine inaweza kutumia QR code hii kupata rekodi zako kwa haraka
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        ID: afya-mw-001234
                      </p>
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
