import React, { useState, useEffect } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Lock, AlertCircle } from 'lucide-react';

interface OTPScreenProps {
  onSuccess: () => void;
}

const OTPScreen = ({ onSuccess }: OTPScreenProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const correctPin = '0457';

  const handleSubmit = (pinValue: string) => {
    setIsLoading(true);
    setError('');

    // Simulate a brief loading state
    setTimeout(() => {
      if (pinValue === correctPin) {
        onSuccess();
      } else {
        setError('Incorrect PIN. Please try again.');
        setValue('');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    if (error) {
      setError('');
    }
  };

  // Auto-submit when PIN is complete
  useEffect(() => {
    if (value.length === 4 && !isLoading) {
      handleSubmit(value);
    }
  }, [value, isLoading]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center" style={{ backgroundImage: "url('/pin-bg.png')" }}>
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-sm rounded-sm shadow-lg p-10 text-center animate-scale-in">
          <div className="w-16 h-16 bg-gradient-to-br from-autumn-sage to-autumn-brown rounded-full flex items-center justify-center mx-auto mb-8">
            <Lock size={24} className="text-white" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2 font-mono">Enter Security PIN</h1>
          <p className="text-gray-600 text-sm mb-6 font-mono">Enter the 4-digit PIN to access the application</p>
          
          <div className="flex justify-center mb-8">
            <InputOTP
              value={value}
              onChange={handleValueChange}
              maxLength={4}
              containerClassName="justify-center"
              disabled={isLoading}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {isLoading && (
            <div className="mb-6 text-gray-600 text-sm">
              Verifying...
            </div>
          )}

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 animate-fade-in">
              <AlertCircle size={16} />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;
