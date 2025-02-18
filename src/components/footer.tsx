import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Footer() {
    return (
      <footer className="w-full bg-white text-gray-800">
        <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Talk Section */}
          <div>
            <h3 className="text-sm font-medium mb-2">Talk</h3>
            <p className="text-sm">info@srmist.edu.in</p>
            <p className="text-sm">+91 44 2745 5510</p>
          </div>

          {/* Meet Section */}
          <div>
            <h3 className="text-sm font-medium mb-2">Meet</h3>
            <p className="text-sm">
              SRM Nagar, Kattankulathur
              <br />
              Chengalpattu District
              <br />
              Tamil Nadu - 603203
            </p>
          </div>

          {/* Join Section */}
          <div>
            <h3 className="text-sm font-medium mb-2">Join</h3>
            <p className="text-sm">careers@srmist.edu.in</p>
            <Link href="/openings" className="text-sm inline-block mt-2 border-b border-current hover:opacity-75">
              VIEW ALL OPENINGS
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">SINCE 1985 IN INDIA</p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
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

          {/* Large SRM IST Text */}
          <div className="mt-12 text-center">
            <TextHoverEffect text="SRM IST" />
          </div>
        </div>
      </div>
    </footer>
  )
}

