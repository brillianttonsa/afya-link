"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ArrowLeft, Activity, TrendingUp, TrendingDown, Plus, Calendar, Target } from 'lucide-react'

export default function HealthTrackingPage() {
  const [bloodPressure, setBloodPressure] = useState({ systolic: "", diastolic: "" })
  const [bloodSugar, setBloodSugar] = useState("")
  const [weight, setWeight] = useState("")

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
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ufuatiliaji wa Afya</h1>
          <p className="text-gray-600">Rekodi na fuatilia hali yako ya afya kila siku</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Shinikizo la Damu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120/80</div>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingDown className="h-4 w-4 text-green-500" />
                <span className="text-xs text-green-600">Imepungua</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">mmHg</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Sukari ya Damu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">110</div>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp className="h-4 w-4 text-yellow-500" />
                <span className="text-xs text-yellow-600">Imeongezeka</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">mg/dL</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Uzito</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75.2</div>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingDown className="h-4 w-4 text-green-500" />
                <span className="text-xs text-green-600">-0.5kg</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">kg</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">BMI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.1</div>
              <div className="flex items-center space-x-1 mt-1">
                <Badge className="bg-green-100 text-green-800 text-xs">Kawaida</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add New Reading */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Ongeza Kipimo Kipya</span>
                </CardTitle>
                <CardDescription>Rekodi hali yako ya afya ya sasa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Blood Pressure */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Shinikizo la Damu</Label>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Input
                        placeholder="120"
                        value={bloodPressure.systolic}
                        onChange={(e) => setBloodPressure({...bloodPressure, systolic: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">Systolic</p>
                    </div>
                    <span className="text-2xl font-bold text-gray-400 mt-2">/</span>
                    <div className="flex-1">
                      <Input
                        placeholder="80"
                        value={bloodPressure.diastolic}
                        onChange={(e) => setBloodPressure({...bloodPressure, diastolic: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">Diastolic</p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">Hifadhi</Button>
                </div>

                {/* Blood Sugar */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Sukari ya Damu</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="110"
                      value={bloodSugar}
                      onChange={(e) => setBloodSugar(e.target.value)}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-500 mt-2">mg/dL</span>
                  </div>
                  <Button size="sm" className="w-full">Hifadhi</Button>
                </div>

                {/* Weight */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Uzito</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="75.2"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-500 mt-2">kg</span>
                  </div>
                  <Button size="sm" className="w-full">Hifadhi</Button>
                </div>
              </CardContent>
            </Card>

            {/* Health Goals */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Malengo ya Afya</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-sm">Shinikizo la Damu</p>
                  <p className="text-xs text-gray-600">Lengo: Chini ya 130/80</p>
                  <div className="mt-2">
                    <Badge className="bg-green-100 text-green-800">Limefikwa</Badge>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-sm">HbA1c</p>
                  <p className="text-xs text-gray-600">Lengo: Chini ya 7%</p>
                  <div className="mt-2">
                    <Badge className="bg-yellow-100 text-yellow-800">Karibu</Badge>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-sm">Uzito</p>
                  <p className="text-xs text-gray-600">Lengo: 70-75 kg</p>
                  <div className="mt-2">
                    <Badge className="bg-green-100 text-green-800">Limefikwa</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Health History */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="recent" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recent">Hivi Karibuni</TabsTrigger>
                <TabsTrigger value="trends">Mwelekeo</TabsTrigger>
                <TabsTrigger value="reports">Ripoti</TabsTrigger>
              </TabsList>

              <TabsContent value="recent" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Rekodi za Hivi Karibuni</CardTitle>
                    <CardDescription>Vipimo vyako vya wiki 2 zilizopita</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Today's Reading */}
                      <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div>
                          <p className="font-medium">Leo - 8:00 AM</p>
                          <p className="text-sm text-gray-600">Shinikizo: 120/80, Sukari: 110 mg/dL</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Vizuri</Badge>
                      </div>

                      {/* Yesterday */}
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Jana - 7:30 AM</p>
                          <p className="text-sm text-gray-600">Shinikizo: 125/82, Sukari: 105 mg/dL, Uzito: 75.5 kg</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Vizuri</Badge>
                      </div>

                      {/* 2 days ago */}
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Juzi - 8:15 AM</p>
                          <p className="text-sm text-gray-600">Shinikizo: 130/85, Sukari: 115 mg/dL</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Wastani</Badge>
                      </div>

                      {/* 3 days ago */}
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">3 siku zilizopita - 7:45 AM</p>
                          <p className="text-sm text-gray-600">Shinikizo: 135/88, Sukari: 120 mg/dL</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Wastani</Badge>
                      </div>

                      {/* Week ago */}
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">Wiki iliyopita - 8:00 AM</p>
                          <p className="text-sm text-gray-600">Shinikizo: 140/90, Sukari: 125 mg/dL, Uzito: 76.2 kg</p>
                        </div>
                        <Badge className="bg-red-100 text-red-800">Juu</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Mwelekeo wa Afya</CardTitle>
                    <CardDescription>Maendeleo yako katika miezi 3 iliyopita</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Shinikizo la Damu</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Januari</span>
                            <span className="text-green-600">125/82 (Wastani)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Desemba</span>
                            <span className="text-yellow-600">135/88 (Juu)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Novemba</span>
                            <span className="text-red-600">145/95 (Juu sana)</span>
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded">
                          <p className="text-sm text-green-800">
                            <TrendingDown className="h-4 w-4 inline mr-1" />
                            Shinikizo limepungua kwa 20/13 mmHg
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Sukari ya Damu</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Januari</span>
                            <span className="text-green-600">110 mg/dL</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Desemba</span>
                            <span className="text-yellow-600">125 mg/dL</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Novemba</span>
                            <span className="text-red-600">140 mg/dL</span>
                          </div>
                        </div>
                        <div className="p-3 bg-green-50 rounded">
                          <p className="text-sm text-green-800">
                            <TrendingDown className="h-4 w-4 inline mr-1" />
                            Sukari imepungua kwa 30 mg/dL
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Maendeleo ya Uzito</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Oktoba</p>
                          <p className="font-semibold">78.5 kg</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Novemba</p>
                          <p className="font-semibold">77.2 kg</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-600">Desemba</p>
                          <p className="font-semibold">76.0 kg</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded">
                          <p className="text-sm text-gray-600">Januari</p>
                          <p className="font-semibold text-green-600">75.2 kg</p>
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 rounded">
                        <p className="text-sm text-green-800">
                          <TrendingDown className="h-4 w-4 inline mr-1" />
                          Umepunguza uzito kwa 3.3 kg katika miezi 3
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Ripoti za Afya</CardTitle>
                    <CardDescription>Ripoti za kila mwezi kutoka kwa data yako</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Ripoti ya Januari 2024</h4>
                            <p className="text-sm text-gray-600">Muhtasari wa mwezi</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Maendeleo Mazuri</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Shinikizo la Damu</p>
                            <p className="font-semibold">125/82 (Wastani)</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Sukari ya Damu</p>
                            <p className="font-semibold">110 mg/dL (Wastani)</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Uzito</p>
                            <p className="font-semibold">75.2 kg</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="mt-3">
                          Pakua Ripoti
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Ripoti ya Desemba 2023</h4>
                            <p className="text-sm text-gray-600">Muhtasari wa mwezi</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800">Wastani</Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Shinikizo la Damu</p>
                            <p className="font-semibold">135/88 (Juu)</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Sukari ya Damu</p>
                            <p className="font-semibold">125 mg/dL (Juu)</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Uzito</p>
                            <p className="font-semibold">76.0 kg</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="mt-3">
                          Pakua Ripoti
                        </Button>
                      </div>
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
