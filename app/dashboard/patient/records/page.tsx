"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ArrowLeft, Search, Download, Share, FileText, Calendar, User, Hospital, Pill, Activity } from 'lucide-react'

export default function PatientRecordsPage() {
  const [searchTerm, setSearchTerm] = useState("")

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
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Shiriki Rekodi
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Pakua PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rekodi Zangu za Matibabu</h1>
          <p className="text-gray-600">Historia kamili ya matibabu yako kutoka hospitali mbalimbali</p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Tafuta rekodi kwa tarehe, daktari, au hospitali..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Chuja kwa Tarehe</Button>
              <Button variant="outline">Chuja kwa Hospitali</Button>
            </div>
          </CardContent>
        </Card>

        {/* Records Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">Zote</TabsTrigger>
            <TabsTrigger value="consultations">Mahojiano</TabsTrigger>
            <TabsTrigger value="tests">Vipimo</TabsTrigger>
            <TabsTrigger value="prescriptions">Dawa</TabsTrigger>
            <TabsTrigger value="procedures">Matibabu</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {/* Recent Consultation */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-green-600" />
                      <span>Mahojiano ya Kufuatilia</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>20 Januari 2024</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Hospital className="h-4 w-4" />
                          <span>Hospitali ya Muhimbili</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>Dkt. Sarah Mwalimu</span>
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Hivi Karibuni</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Matatizo Yaliyoripotiwa:</h4>
                    <p className="text-sm text-gray-600">Uchovu mkuu, kiu kali, na mkojo mwingi</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Uchunguzi:</h4>
                    <p className="text-sm text-gray-600">Shinikizo la damu: 140/90 mmHg, Uzito: 78kg, BMI: 24.5</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Utambuzi:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Kisukari cha Aina ya 2</Badge>
                      <Badge variant="secondary">Shinikizo la Damu</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Matibabu Yaliyopendekezwa:</h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>Metformin 500mg - mara 2 kwa siku</li>
                      <li>Lisinopril 10mg - mara 1 kwa siku</li>
                      <li>Badiliko la lishe - kupunguza sukari na chumvi</li>
                      <li>Mazoezi ya kila siku - dakika 30</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Muadi Unaofuata:</h4>
                    <p className="text-sm text-gray-600">15 Februari 2024 - Kufuatilia maendeleo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lab Results */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-blue-600" />
                      <span>Matokeo ya Vipimo vya Damu</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>18 Januari 2024</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Hospital className="h-4 w-4" />
                          <span>Lab ya Aga Khan</span>
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Vipimo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">HbA1c</span>
                      <span className="text-red-600 font-semibold">8.2%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Sukari ya Damu (Tupu)</span>
                      <span className="text-red-600 font-semibold">145 mg/dL</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Cholesterol</span>
                      <span className="text-yellow-600 font-semibold">210 mg/dL</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Hemoglobin</span>
                      <span className="text-green-600 font-semibold">13.5 g/dL</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Creatinine</span>
                      <span className="text-green-600 font-semibold">0.9 mg/dL</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="font-medium">Urea</span>
                      <span className="text-green-600 font-semibold">25 mg/dL</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Maelezo ya Daktari:</strong> Matokeo yanaonyesha kisukari hakijadhibitiwa vizuri. 
                    Ongeza dozi ya dawa na fuata lishe ya hali ya juu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Prescription */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Pill className="h-5 w-5 text-purple-600" />
                      <span>Dawa Zilizotolewa</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>15 Januari 2024</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>Dkt. John Massawe</span>
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">Dawa</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Metformin 500mg</h4>
                      <Badge variant="outline">30 vidonge</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Maelekezo:</strong> Tumia kidonge 1 mara 2 kwa siku baada ya chakula
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Muda:</strong> Miezi 3 | <strong>Kumbuka:</strong> Tumia na chakula ili kuepuka maumivu ya tumbo
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Lisinopril 10mg</h4>
                      <Badge variant="outline">30 vidonge</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Maelekezo:</strong> Tumia kidonge 1 kila asubuhi
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Muda:</strong> Kudumu | <strong>Kumbuka:</strong> Usisahau hata siku moja
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Records */}
            <Card>
              <CardHeader>
                <CardTitle>Rekodi za Zamani</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                    <div>
                      <p className="font-medium">Uchunguzi wa Kawaida</p>
                      <p className="text-sm text-gray-600">10 Desemba 2023 - Dkt. Sarah Mwalimu</p>
                    </div>
                    <Button variant="ghost" size="sm">Ona</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                    <div>
                      <p className="font-medium">Vipimo vya Damu</p>
                      <p className="text-sm text-gray-600">25 Novemba 2023 - Lab ya Muhimbili</p>
                    </div>
                    <Button variant="ghost" size="sm">Ona</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                    <div>
                      <p className="font-medium">Uchunguzi wa Macho</p>
                      <p className="text-sm text-gray-600">15 Oktoba 2023 - Dkt. Mary Kileo</p>
                    </div>
                    <Button variant="ghost" size="sm">Ona</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultations">
            <Card>
              <CardHeader>
                <CardTitle>Mahojiano ya Madaktari</CardTitle>
                <CardDescription>Historia ya mahojiano yako na madaktari mbalimbali</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">Mahojiano yako yataonyeshwa hapa...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests">
            <Card>
              <CardHeader>
                <CardTitle>Matokeo ya Vipimo</CardTitle>
                <CardDescription>Vipimo vyote vya lab na imaging</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">Matokeo ya vipimo yataonyeshwa hapa...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card>
              <CardHeader>
                <CardTitle>Historia ya Dawa</CardTitle>
                <CardDescription>Dawa zote zilizokutolewa na madaktari</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">Historia ya dawa itaonyeshwa hapa...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="procedures">
            <Card>
              <CardHeader>
                <CardTitle>Matibabu na Upasuaji</CardTitle>
                <CardDescription>Matibabu maalum na upasuaji uliofanywa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">Rekodi za matibabu zitaonyeshwa hapa...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
