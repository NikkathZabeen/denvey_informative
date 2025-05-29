
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, Building, ArrowRight } from 'lucide-react';

const LoginBrands = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card className="shadow-2xl border-0 bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="bg-cherry-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-cherry-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      Brand Login
                    </h1>
                    <p className="text-gray-600">
                      Access your brand dashboard and manage campaigns
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        placeholder="brand@company.com"
                        className="border-gray-300 focus:border-cherry-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="border-gray-300 focus:border-cherry-500 pr-10"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-cherry-600 focus:ring-cherry-500" />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-cherry-600 hover:text-cherry-700">
                        Forgot password?
                      </a>
                    </div>

                    <Button className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3">
                      Sign In
                    </Button>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">
                      Don't have a brand account?
                    </p>
                    <Link to="/request-demo">
                      <Button 
                        variant="outline" 
                        className="w-full text-cherry-600 border-cherry-200 hover:bg-cherry-50 group"
                      >
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-500">
                      Are you an influencer?{' '}
                      <Link to="/login/influencers" className="text-cherry-600 hover:text-cherry-700 font-medium">
                        Login here
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginBrands;
