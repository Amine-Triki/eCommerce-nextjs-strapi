"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

// أيقونات من lucide-react
import { MapPin, Mail, PhoneCall } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        {/* ✅ الجزء الأيسر: الفورم */}
        <Card className="shadow-lg border-0">
          <CardContent className="space-y-6 p-6">
            <h2 className="text-2xl font-bold text-gray-800 text-left">
              Get in touch
            </h2>
            <p className="text-sm text-gray-500 text-left leading-relaxed">
              If you have any questions or suggestions, you can simply write to
              us, and we will get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div className="flex flex-col space-y-2 text-left">
                <Label htmlFor="name">
                  full name<span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="  Write your full name" />
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <Label htmlFor="email">
                  e-mail<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <Label htmlFor="subject">
                  subject <span className="text-red-500">*</span>
                </Label>
                <Input id="subject" placeholder="Subject of your message " />
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <Label htmlFor="message">message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
              >
                send
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* ✅ الجزء الأيمن: معلومات التواصل */}
        <div className="flex flex-col items-start justify-center space-y-8 text-2xl text-left">
          {/* 📍 العنوان */}
          <div className="flex items-start gap-3 justify-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                <MapPin className="w-5 h-5 text-green-600" />
                العنوان
              </h3>
              <p className="text-gray-600">Lorem, ipsum.</p>
              <p className="text-gray-600">  Sequi dolor.( Sequi, odio molestiae culpaexercitationem.)</p>
            </div>
          </div>

          {/* ✉️ البريد */}
          <div className="flex items-start gap-3 justify-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                <Mail className="w-5 h-5 text-green-600" />
               e-mail
              </h3>

              <p className="text-green-800 hover:underline cursor-pointer">
                Loremipsumisti.@gmail.com
              </p>
            </div>
          </div>
          {/* ✉️ الهاتف */}
          <div className="flex items-start gap-3 justify-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                <PhoneCall className="w-5 h-5 text-green-600" />
                phone
              </h3>

              <p className="text-green-800  hover:underline cursor-pointer">
                +216 55 55 55 55
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
