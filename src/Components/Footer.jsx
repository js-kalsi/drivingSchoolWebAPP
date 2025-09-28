import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-700 to-rose-800 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">
                  Punjab Driving School
                </h3>
                <p className="text-gray-400 text-sm">
                  Your path to safe driving
                </p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              We provide professional driving instruction with experienced,
              certified instructors. Our goal is to help you become a safe,
              confident driver for life.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-serif">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>G2 Road Test Preparation</li>
              <li>G Road Test Preparation</li>
              <li>Beginner Lessons</li>
              <li>Refresher Courses</li>
              <li>Highway Driving</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-serif">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(647) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@punjabdriving.ca</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ottawa, Ontario</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Punjab Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
