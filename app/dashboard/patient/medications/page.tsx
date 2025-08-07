"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Heart, ArrowLeft, Pill, Clock, CheckCircle, AlertCircle, Bell, Calendar, Plus } from 'lucide-react'

export default function PatientMedicationsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

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
              Ongeza Dawa
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dawa Zangu</h1>
          <p className="text-gray-600">Fuatilia dawa zako na pokea vikumbusho vya kuzitumia</p>
        </div>

        {/* Today's Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Dawa za Leo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3/4</div>
              <Progress value={75} className="mt-2" />
              <p className="text-xs text-gray-600 mt-2">Zimesalia 1</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Dawa za Kudumu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600 mt-2">Zinaendelea</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Kufuata Ratiba</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <p className="text-xs text-gray-600 mt-2">Wiki hii</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pointi Zilizopata</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">+45</div>
              <p className="text-xs text-gray-600 mt-2">Leo</p>
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Mipangilio ya Vikumbusho</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Vikumbusho vya Dawa</p>
                <p className="text-sm text-gray-600">Pokea arifa za kutumia dawa kwa wakati</p>
              </div>
              <Switch 
                checked={notificationsEnabled} 
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
          </CardContent>
        </Card>

        {/* Today's Medications */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Dawa za Leo</span>
            </CardTitle>
            <CardDescription>Ratiba yako ya dawa kwa siku ya leo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-medium">Metformin 500mg</p>
                  <p className="text-sm text-gray-600">8:00 AM - Baada ya kifungua kinywa</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Imetumika</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-medium">Lisinopril 10mg</p>
                  <p className="text-sm text-gray-600">8:30 AM - Pamoja na maji</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Imetumika</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-medium">Aspirin 75mg</p>
                  <p className="text-sm text-gray-600">1:00 PM - Baada ya chakula cha mchana</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Imetumika</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="font-medium">Metformin 500mg</p>
                  <p className="text-sm text-gray-600">8:00 PM - Baada ya chakula cha jioni</p>
                </div>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Thibitisha
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* All Medications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Pill className="h-5 w-5" />
              <span>Dawa Zote</span>
            </CardTitle>
            <CardDescription>Orodha kamili ya dawa unazotumia</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Active Medications */}
            <div>
              <h3 className="font-semibold mb-4 text-green-700">Dawa za Kudumu</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">Metformin 500mg</h4>
                        <p className="text-sm text-gray-600">Kwa kisukari cha aina ya 2</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Inaendelea</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Dozi:</strong> Kidonge 1, mara 2 kwa siku</p>
                        <p><strong>Wakati:</strong> 8:00 AM na 8:00 PM</p>
                        <p><strong>Pamoja na:</strong> Chakula</p>
                      </div>
                      <div>
                        <p><strong>Daktari:</strong> Dkt. Sarah Mwalimu</p>
                        <p><strong>Tarehe ya Kuanza:</strong> 15 Jan 2024</p>
                        <p><strong>Kufuata:</strong> 95% (wiki hii)</p>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded">
                      <p className="text-sm text-blue-800">
                        <strong>Maelekezo:</strong> Tumia pamoja na chakula ili kuepuka maumivu ya tumbo. 
                        Usiache bila kushauriana na daktari.
                      </p>
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
                      <Badge className="bg-green-100 text-green-800">Inaendelea</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Dozi:</strong> Kidonge 1, mara 1 kwa siku</p>
                        <p><strong>Wakati:</strong> 8:30 AM</p>
                        <p><strong>Pamoja na:</strong> Maji</p>
                      </div>
                      <div>
                        <p><strong>Daktari:</strong> Dkt. Sarah Mwalimu</p>
                        <p><strong>Tarehe ya Kuanza:</strong> 15 Jan 2024</p>
                        <p><strong>Kufuata:</strong> 98% (wiki hii)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">Aspirin 75mg</h4>
                        <p className="text-sm text-gray-600">Kuzuia magumu ya damu</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Kwa Muda</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Dozi:</strong> Kidonge 1, mara 1 kwa siku</p>
                        <p><strong>Wakati:</strong> 1:00 PM</p>
                        <p><strong>Pamoja na:</strong> Chakula</p>
                      </div>
                      <div>
                        <p><strong>Daktari:</strong> Dkt. John Massawe</p>
                        <p><strong>Muda:</strong> Miezi 6</p>
                        <p><strong>Kumaliza:</strong> 15 Julai 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Completed Medications */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-700">Dawa Zilizokwisha</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-gray-400 opacity-75">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">Amoxicillin 500mg</h4>
                        <p className="text-sm text-gray-600">Kwa maambukizi ya bakteria</p>
                      </div>
                      <Badge variant="secondary">Imekwisha</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <p><strong>Dozi:</strong> Kidonge 1, mara 3 kwa siku</p>
                        <p><strong>Muda:</strong> Siku 7</p>
                      </div>
                      <div>
                        <p><strong>Kuanza:</strong> 1 Jan 2024</p>
                        <p><strong>Kumaliza:</strong> 7 Jan 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
