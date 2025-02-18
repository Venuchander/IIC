import { DotPattern } from "@/components/magicui/dot-pattern";

import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto p-8">
        <div className="relative bg-white rounded-3xl shadow-sm p-8">
          <DotPattern className="absolute inset-0 w-full h-full" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Talk</h3>
                <p className="text-sm">info@srmist.edu.in</p>
                <p className="text-sm">+91 44 2745 5510</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Meet</h3>
                <p className="text-sm">
                  SRM Nagar, Kattankulathur
                  <br />
                  Chengalpattu District
                  <br />
                  Tamil Nadu - 603203
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Join</h3>
                <p className="text-sm">careers@srmist.edu.in</p>
                <Link 
                  href="/openings" 
                  className="text-sm inline-block border-b border-current hover:opacity-75"
                >
                  VIEW ALL OPENINGS
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm">SINCE 1985 IN INDIA</p>
                <div className="flex items-center gap-8">
                  <Link href="https://twitter.com/SRM_Univ" className="hover:opacity-75">
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/school/srm-institute-of-science-and-technology/"
                    className="hover:opacity-75"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://github.com/SRMIST" className="hover:opacity-75">
                    <Github size={20} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://www.instagram.com/srm_university/" className="hover:opacity-75">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
                <Link href="/privacy" className="text-sm hover:opacity-75">
                  PRIVACY POLICY
                </Link>
              </div>
              <div className="mt-16 text-center">
                <TextHoverEffect text="SRM IST" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
