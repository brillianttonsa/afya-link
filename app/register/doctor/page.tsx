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
import { Heart, Eye, EyeOff, ArrowLeft, Upload } from 'lucide-react'

export default function DoctorRegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
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
            <CardTitle className="text-2xl font-bold text-center">Jisajili kama Daktari</CardTitle>
            <CardDescription className="text-center">
              Jaza fomu hii ili kuunda akaunti yako ya daktari
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
                  <Label htmlFor="email">Barua Pepe ya Kazini *</Label>
                  <Input id="email" type="email" placeholder="daktari@hospitali.co.tz" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Namba ya Simu *</Label>
                  <Input id="phone" placeholder="+255 123 456 789" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Taarifa za Kitaaluma</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="medicalLicense">Namba ya Leseni ya Udaktari *</Label>
                  <Input id="medicalLicense" placeholder="MD-TZ-12345" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialization">Utaalamu *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chagua utaalamu wako" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Daktari wa Jumla</SelectItem>
                      <SelectItem value="internal">Magonjwa ya Ndani</SelectItem>
                      <SelectItem value="pediatrics">Watoto</SelectItem>
                      <SelectItem value="surgery">Upasuaji</SelectItem>
                      <SelectItem value="gynecology">Wanawake na Uzazi</SelectItem>
                      <SelectItem value="cardiology">Moyo</SelectItem>
                      <SelectItem value="neurology">Ubongo na Mishipa</SelectItem>
                      <SelectItem value="orthopedics">Mifupa</SelectItem>
                      <SelectItem value="dermatology">Ngozi</SelectItem>
                      <SelectItem value="psychiatry">Akili na Mawazo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Miaka ya Uzoefu *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chagua miaka ya uzoefu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 miaka</SelectItem>
                      <SelectItem value="3-5">3-5 miaka</SelectItem>
                      <SelectItem value="6-10">6-10 miaka</SelectItem>
                      <SelectItem value="11-15">11-15 miaka</SelectItem>
                      <SelectItem value="16-20">16-20 miaka</SelectItem>
                      <SelectItem value="20+">Zaidi ya 20 miaka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qualification">Shahada ya Juu *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chagua shahada yako ya juu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mbchb">MBChB</SelectItem>
                      <SelectItem value="md">MD</SelectItem>
                      <SelectItem value="mmed">MMed</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="fellowship">Fellowship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">Chuo Kikuu *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chagua chuo kikuu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="muhas">MUHAS - Dar es Salaam</SelectItem>
                    <SelectItem value="kcmu">KCMU - Moshi</SelectItem>
                    <SelectItem value="udom">UDOM - Dodoma</SelectItem>
                    <SelectItem value="international">Chuo cha Kimataifa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Hospital Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Taarifa za Hospitali</h3>
              
              <div className="space-y-2">
                <Label htmlFor="hospital">Hospitali Unayofanya Kazi *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chagua hospitali" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="muhimbili">Hospitali ya Muhimbili</SelectItem>
                    <SelectItem value="agakhan">Hospitali ya Aga Khan</SelectItem>
                    <SelectItem value="bugando">Hospitali ya Bugando</SelectItem>
                    <SelectItem value="mbeya">Hospitali ya Mbeya</SelectItem>
                    <SelectItem value="kilimanjaro">Hospitali ya Kilimanjaro</SelectItem>
                    <SelectItem value="private">Hospitali Binafsi</SelectItem>
                    <SelectItem value="clinic">Kliniki</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Idara *</Label>
                  <Input id="department" placeholder="Idara ya Magonjwa ya Ndani" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Cheo *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chagua cheo chako" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="intern">Intern</SelectItem>
                      <SelectItem value="resident">Resident</SelectItem>
                      <SelectItem value="registrar">Registrar</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="specialist">Specialist</SelectItem>
                      <SelectItem value="senior">Senior Consultant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workSchedule">Ratiba ya Kazi</Label>
                <Textarea id="workSchedule" placeholder="Eleza ratiba yako ya kazi (siku na masaa)" />
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Hati za Uthibitisho</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="licenseDoc">Leseni ya Udaktari *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Bofya kupakia leseni yako</p>
                    <Input id="licenseDoc" type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="certificateDoc">Shahada ya Udaktari *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Bofya kupakia shahada yako</p>
                    <Input id="certificateDoc" type="file" className="hidden" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hospitalLetter">Barua ya Uthibitisho kutoka Hospitali *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Barua inayothibitisha unafanya kazi hospitalini</p>
                  <Input id="hospitalLetter" type="file" className="hidden" accept=".pdf,.jpg,.png" />
                </div>
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
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Masharti na Vigezo
                  </Link>{" "}
                  na{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Sera za Faragha
                  </Link>{" "}
                  za AfyaLink
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="ethics" />
                <Label htmlFor="ethics" className="text-sm leading-5">
                  Ninakubali kufuata kanuni za maadili za udaktari na kutoa huduma bora kwa wagonjwa
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="verification" />
                <Label htmlFor="verification" className="text-sm leading-5">
                  Ninaelewa kuwa akaunti yangu itahitaji kuthibitishwa na timu ya AfyaLink kabla ya kuanza kutumia
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
              Wasilisha Ombi la Usajili
            </Button>

            <div className="text-center text-sm">
              Una akaunti tayari?{" "}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                Ingia hapa
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
