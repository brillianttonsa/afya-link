"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, ArrowLeft, User, Search, QrCode } from 'lucide-react'

export default function AddPatientPage() {
  const [searchMethod, setSearchMethod] = useState("new")
  const [patientId, setPatientId] = useState("")

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
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sajili Mgonjwa</h1>
          <p className="text-gray-600">Sajili mgonjwa mpya au tafuta mgonjwa aliyepo tayari</p>
        </div>

        {/* Search Method Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Chagua Njia ya Usajili</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  searchMethod === "new" ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
                onClick={() => setSearchMethod("new")}
              >
                <User className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold">Mgonjwa Mpya</h3>
                <p className="text-sm text-gray-600">Sajili mgonjwa mpya kabisa</p>
              </div>

              <div 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  searchMethod === "search" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
                onClick={() => setSearchMethod("search")}
              >
                <Search className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">Tafuta Mgonjwa</h3>
                <p className="text-sm text-gray-600">Tafuta mgonjwa aliyepo tayari</p>
              </div>

              <div 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  searchMethod === "qr" ? "border-purple-500 bg-purple-50" : "border-gray-200"
                }`}
                onClick={() => setSearchMethod("qr")}
              >
                <QrCode className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold">QR Code</h3>
                <p className="text-sm text-gray-600">Tumia QR code ya mgonjwa</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Existing Patient */}
        {searchMethod === "search" && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tafuta Mgonjwa Aliyepo</CardTitle>
              <CardDescription>Ingiza kitambulisho cha mgonjwa au taarifa zake</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientSearch">Kitambulisho cha Mgonjwa au Jina</Label>
                <Input 
                  id="patientSearch"
                  placeholder="afya-mw-001234 au Mwangi John"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Tafuta Mgonjwa
              </Button>
              
              {/* Search Results */}
              {patientId && (
                <div className="mt-4 p-4 border rounded-lg bg-green-50">
                  <h4 className="font-semibold text-green-800">Mgonjwa Amepatikana!</h4>
                  <div className="mt-2">
                    <p className="font-medium">Mwangi John Kamau</p>
                    <p className="text-sm text-gray-600">ID: afya-mw-001234</p>
                    <p className="text-sm text-gray-600">Umri: 45, Jinsia: Mwanaume</p>
                    <p className="text-sm text-gray-600">Hospitali ya mwisho: Hospitali ya Aga Khan</p>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Ongeza kwenye Wagonjwa Wangu
                    </Button>
                    <Button size="sm" variant="outline">
                      Ona Historia
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* QR Code Scanner */}
        {searchMethod === "qr" && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Scan QR Code ya Mgonjwa</CardTitle>
              <CardDescription>Tumia kamera ya simu au kompyuta kusoma QR code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <QrCode className="h-24 w-24 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Bofya hapa kuanza kusoma QR code</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Fungua Camera
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* New Patient Registration Form */}
        {searchMethod === "new" && (
          <Card>
            <CardHeader>
              <CardTitle>Fomu ya Usajili wa Mgonjwa Mpya</CardTitle>
              <CardDescription>Jaza taarifa za msingi za mgonjwa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Taarifa za Kibinafsi</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Jina la Kwanza *</Label>
                    <Input id="firstName" placeholder="Jina la kwanza" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Jina la Mwisho *</Label>
                    <Input id="lastName" placeholder="Jina la mwisho" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Tarehe ya Kuzaliwa *</Label>
                    <Input id="dateOfBirth" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Jinsia *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chagua jinsia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Mwanaume</SelectItem>
                        <SelectItem value="female">Mwanamke</SelectItem>
                        <SelectItem value="other">Nyingine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Aina ya Damu</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chagua aina ya damu" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Namba ya Simu</Label>
                    <Input id="phone" placeholder="+255 123 456 789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Barua Pepe</Label>
                    <Input id="email" type="email" placeholder="mgonjwa@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Anwani</Label>
                  <Textarea id="address" placeholder="Ingiza anwani kamili" />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Mtu wa Kuwasiliana Wakati wa Dharura</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName">Jina la Mtu wa Dharura</Label>
                    <Input id="emergencyName" placeholder="Jina kamili" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Namba ya Simu ya Dharura</Label>
                    <Input id="emergencyPhone" placeholder="+255 123 456 789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyRelation">Uhusiano</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chagua uhusiano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parent">Mzazi</SelectItem>
                      <SelectItem value="spouse">Mwenza</SelectItem>
                      <SelectItem value="sibling">Ndugu</SelectItem>
                      <SelectItem value="child">Mtoto</SelectItem>
                      <SelectItem value="friend">Rafiki</SelectItem>
                      <SelectItem value="other">Mwingine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Medical History */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Historia ya Matibabu</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="currentComplaints">Matatizo ya Sasa</Label>
                  <Textarea id="currentComplaints" placeholder="Eleza matatizo yanayomletea mgonjwa" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Mzio (Allergies)</Label>
                  <Textarea id="allergies" placeholder="Orodhesha mzio wowote wa dawa au chakula" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conditions">Magonjwa ya Kudumu</Label>
                  <Textarea id="conditions" placeholder="Magonjwa ya kudumu kama kisukari, shinikizo la damu, n.k." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">Dawa Anazotumia Sasa</Label>
                  <Textarea id="medications" placeholder="Orodhesha dawa zote anazotumia sasa" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="familyHistory">Historia ya Familia</Label>
                  <Textarea id="familyHistory" placeholder="Magonjwa ya familia (wazazi, ndugu)" />
                </div>
              </div>

              {/* Initial Assessment */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Uchunguzi wa Kwanza</h3>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Uzito (kg)</Label>
                    <Input id="weight" type="number" placeholder="75" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Urefu (cm)</Label>
                    <Input id="height" type="number" placeholder="170" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="systolic">Shinikizo (Systolic)</Label>
                    <Input id="systolic" type="number" placeholder="120" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="diastolic">Shinikizo (Diastolic)</Label>
                    <Input id="diastolic" type="number" placeholder="80" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Joto la Mwili (°C)</Label>
                    <Input id="temperature" type="number" step="0.1" placeholder="36.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pulse">Mapigo ya Moyo</Label>
                    <Input id="pulse" type="number" placeholder="72" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodSugar">Sukari ya Damu (mg/dL)</Label>
                    <Input id="bloodSugar" type="number" placeholder="110" />
                  </div>
                </div>
              </div>

              {/* Diagnosis and Treatment */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Utambuzi na Matibabu</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="diagnosis">Utambuzi wa Awali</Label>
                  <Textarea id="diagnosis" placeholder="Andika utambuzi wako wa awali" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">Mipango ya Matibabu</Label>
                  <Textarea id="treatment" placeholder="Eleza mipango ya matibabu" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prescriptions">Dawa Zilizotolewa</Label>
                  <Textarea id="prescriptions" placeholder="Orodhesha dawa zilizotolewa na maelekezo" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="followUp">Muadi wa Kufuatilia</Label>
                  <Input id="followUp" type="date" />
                </div>
              </div>

              {/* Permissions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Ruhusa</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="shareData" />
                    <Label htmlFor="shareData" className="text-sm leading-5">
                      Mgonjwa amekubali kushirikisha data yake na hospitali nyingine zinazotumia AfyaLink
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="notifications" />
                    <Label htmlFor="notifications" className="text-sm leading-5">
                      Mgonjwa anataka kupokea vikumbusho vya dawa na miadi kupitia simu
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="research" />
                    <Label htmlFor="research" className="text-sm leading-5">
                      Mgonjwa amekubali data yake itumike kwa utafiti wa kiafya (bila kutambulika)
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 flex-1">
                  Sajili Mgonjwa
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Hifadhi kama Rasimu
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
