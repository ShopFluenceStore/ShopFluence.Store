"use client";
import React, { useState } from 'react';
import Container from '@/components/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@shopfluence.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (234) 567-8900',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Commerce Street, New York, NY 10001',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 8am-5pm EST',
      description: 'Weekend support available'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Container className="py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[var(--sub-text)] max-w-3xl mx-auto leading-relaxed">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
            Our team is here to help and support you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 bg-white">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this about?"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90 text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Contact Information</h2>
              <p className="text-[var(--sub-text)] leading-relaxed">
                Choose the most convenient way to reach us. We're committed to providing 
                you with the best customer service experience.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--main)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[var(--main)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text)] text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-[var(--main)] font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-[var(--sub-text)] text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* FAQ Section */}
            <Card className="p-6 border-0 bg-gradient-to-br from-[var(--main)]/5 to-[var(--second)]/5">
              <h3 className="font-semibold text-[var(--text)] text-lg mb-3">
                Frequently Asked Questions
              </h3>
              <p className="text-[var(--sub-text)] text-sm mb-4">
                Before reaching out, you might find your answer in our comprehensive FAQ section.
              </p>
              <Button variant="outline" className="border-[var(--main)] text-[var(--main)] hover:bg-[var(--main)] hover:text-white">
                View FAQ
              </Button>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-16 p-8 border-0 bg-white">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-6 text-center">
            Visit Our Office
          </h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[var(--main)] mx-auto mb-4" />
              <p className="text-[var(--sub-text)]">Interactive map would be displayed here</p>
              <p className="text-sm text-[var(--sub-text)] mt-2">
                123 Commerce Street, New York, NY 10001
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default ContactPage;