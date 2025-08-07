"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <Heart className="h-10 w-10 text-green-600" />
            <span className="text-3xl font-bold text-gray-900">AfyaLink</span>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Ingia Akaunti</CardTitle>
            <CardDescription className="text-center">
              Ingiza taarifa zako za kuingia ili kuendelea
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userType">Aina ya Mtumiaji</Label>
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger>
                  <SelectValue placeholder="Chagua aina ya mtumiaji" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="patient">Mgonjwa</SelectItem>
                  <SelectItem value="doctor">Daktari</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Barua Pepe au Namba ya Kitambulisho</Label>
              <Input 
                id="email" 
                type="text" 
                placeholder={userType === "doctor" ? "daktari@hospitali.co.tz" : "mgonjwa@email.com au afya-12345"} 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Nywila</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Ingiza nywila yako"
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

            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                Umesahau nywila?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Ingia
            </Button>

            <div className="text-center text-sm">
              Huna akaunti?{" "}
              <Link href="/register" className="text-green-600 hover:underline font-medium">
                Jisajili hapa
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
