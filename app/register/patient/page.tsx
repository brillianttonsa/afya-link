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
import { Heart, Eye, EyeOff, ArrowLeft } from 'lucide-react'

export default function PatientRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/register" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5" />
            <span>Rudi Nyuma</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">AfyaLink</span>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Jisajili kama Mgonjwa</CardTitle>
            <CardDescription className="text-center">
              Jaza fomu hii ili kuunda akaunti yako ya mgonjwa
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Taarifa za Kibinafsi</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Jina la Kwanza *</Label>
                  <Input id="firstName" placeholder="Jina lako la kwanza" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Jina la Mwisho *</Label>
                  <Input id="lastName" placeholder="Jina lako la mwisho" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Barua Pepe *</Label>
                  <Input id="email" type="email" placeholder="mgonjwa@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Namba ya Simu *</Label>
                  <Input id="phone" placeholder="+255 123 456 789" required />
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

              <div className="space-y-2">
                <Label htmlFor="address">Anwani</Label>
                <Textarea id="address" placeholder="Ingiza anwani yako kamili" />
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
              <h3 className="text-lg font-semibold text-gray-900">Historia ya Matibabu (Hiari)</h3>
              
              <div className="space-y-2">
                <Label htmlFor="allergies">Mzio (Allergies)</Label>
                <Textarea id="allergies" placeholder="Orodhesha mzio wowote wa dawa au chakula" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conditions">Magonjwa ya Kudumu</Label>
                <Textarea id="conditions" placeholder="Magonjwa ya kudumu kama kisukari, shinikizo la damu, n.k." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">Dawa Unazotumia Sasa</Label>
                <Textarea id="medications" placeholder="Orodhesha dawa zote unazotumia sasa" />
              </div>
            </div>

            {/* Account Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Usalama wa Akaunti</h3>
              
              <div className="space-y-2">
                <Label htmlFor="password">Nywila *</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Unda nywila yenye nguvu"
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Thibitisha Nywila *</Label>
                <div className="relative">
                  <Input 
                    id="confirmPassword" 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Rudia nywila yako"
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm leading-5">
                  Ninakubali{" "}
                  <Link href="/terms" className="text-green-600 hover:underline">
                    Masharti na Vigezo
                  </Link>{" "}
                  na{" "}
                  <Link href="/privacy" className="text-green-600 hover:underline">
                    Sera za Faragha
                  </Link>{" "}
                  za AfyaLink
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="notifications" />
                <Label htmlFor="notifications" className="text-sm leading-5">
                  Nataka kupokea vikumbusho vya afya na taarifa muhimu kupitia barua pepe na ujumbe
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
              Unda Akaunti ya Mgonjwa
            </Button>

            <div className="text-center text-sm">
              Una akaunti tayari?{" "}
              <Link href="/login" className="text-green-600 hover:underline font-medium">
                Ingia hapa
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
