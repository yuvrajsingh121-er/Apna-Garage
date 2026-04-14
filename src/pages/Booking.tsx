import * as React from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Clock, Car, ShieldCheck, ChevronRight, ArrowLeft, CheckCircle2, Info, Wrench } from "lucide-react";
import { GARAGES, SERVICES } from "../data";
import { cn } from "../lib/utils";

export const Booking = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const garage = GARAGES.find(g => g.id === id) || GARAGES[0];
  const initialService = searchParams.get("service");

  const [step, setStep] = React.useState(1);
  const [selectedService, setSelectedService] = React.useState(initialService || "");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");
  const [vehicleInfo, setVehicleInfo] = React.useState({ make: "", model: "", year: "", registration: "" });

  const currentService = SERVICES.find(s => s.id === selectedService);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const steps = [
    { id: 1, name: "Service", icon: <Wrench className="w-4 h-4" /> },
    { id: 2, name: "Schedule", icon: <Calendar className="w-4 h-4" /> },
    { id: 3, name: "Vehicle", icon: <Car className="w-4 h-4" /> },
    { id: 4, name: "Confirm", icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  if (step === 5) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-surface">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-surface-container-lowest p-12 rounded-[48px] border border-outline-variant shadow-2xl shadow-primary/10 text-center"
        >
          <div className="w-24 h-24 bg-on-tertiary-container rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-on-tertiary-container/20">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-headline font-extrabold text-primary mb-4 tracking-tight">Booking Confirmed!</h1>
          <p className="text-secondary text-sm mb-10 leading-relaxed">
            Your appointment at <span className="text-primary font-bold">{garage.name}</span> has been successfully scheduled. A confirmation email has been sent to your inbox.
          </p>
          <div className="space-y-4">
            <Link to="/" className="block w-full bg-primary text-surface py-4 rounded-2xl font-bold hover:bg-primary-container transition-all">
              Go to Dashboard
            </Link>
            <button className="text-sm font-bold text-on-tertiary-container hover:underline">Download Receipt</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <Link to={`/garage/${garage.id}`} className="flex items-center gap-2 text-secondary font-bold text-sm mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Workshop
            </Link>
            <h1 className="text-4xl font-headline font-extrabold text-primary tracking-tight">
              Select <span className="text-on-tertiary-container italic">Premium</span> Service
            </h1>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-2xl border border-outline-variant">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all",
                  step === s.id ? "bg-primary text-surface shadow-lg shadow-primary/10" : 
                  step > s.id ? "bg-on-tertiary-container text-primary" : "text-secondary"
                )}>
                  {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.icon}
                </div>
                {i < steps.length - 1 && <div className="w-8 h-[2px] bg-outline-variant" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Booking Area */}
          <div className="lg:col-span-8">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface-container-lowest p-10 rounded-[40px] border border-outline-variant shadow-sm"
            >
              {step === 1 && (
                <div className="space-y-8">
                    <h2 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-on-tertiary-container" />
                    Choose Your Service
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={cn(
                          "p-6 rounded-3xl border-2 text-left transition-all duration-300",
                          selectedService === service.id ? "border-primary bg-surface-container-low shadow-xl shadow-primary/5" : "border-outline-variant hover:border-secondary"
                        )}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                            selectedService === service.id ? "bg-primary text-surface" : "bg-surface-container-low text-secondary"
                          )}>
                            <Wrench className="w-5 h-5" />
                          </div>
                          <p className="text-xl font-headline font-extrabold text-primary">£{service.price}</p>
                        </div>
                        <h4 className="text-lg font-headline font-bold text-primary mb-1">{service.name}</h4>
                        <p className="text-xs text-secondary font-medium uppercase tracking-widest">Duration: {service.duration}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-on-tertiary-container" />
                    Schedule Appointment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Select Date</label>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedDate(`March ${i + 26}`)}
                            className={cn(
                              "py-4 rounded-xl border text-sm font-bold transition-all",
                              selectedDate === `March ${i + 26}` ? "bg-primary text-surface border-primary" : "border-outline-variant hover:border-secondary text-secondary"
                            )}
                          >
                            <span className="block text-[10px] opacity-60">MAR</span>
                            {i + 26}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Available Slots</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2",
                              selectedTime === time ? "bg-primary text-surface border-primary" : "border-outline-variant hover:border-secondary text-secondary"
                            )}
                          >
                            <Clock className="w-4 h-4" />
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <Car className="w-6 h-6 text-on-tertiary-container" />
                    Vehicle Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-widest">Registration Number</label>
                      <input
                        type="text"
                        placeholder="e.g. AB12 CDE"
                        className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-xl font-bold text-primary uppercase placeholder:normal-case"
                        value={vehicleInfo.registration}
                        onChange={(e) => setVehicleInfo({ ...vehicleInfo, registration: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-widest">Vehicle Make</label>
                      <input
                        type="text"
                        placeholder="e.g. Porsche"
                        className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-xl font-bold text-primary"
                        value={vehicleInfo.make}
                        onChange={(e) => setVehicleInfo({ ...vehicleInfo, make: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-widest">Model</label>
                      <input
                        type="text"
                        placeholder="e.g. 911 Carrera"
                        className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-xl font-bold text-primary"
                        value={vehicleInfo.model}
                        onChange={(e) => setVehicleInfo({ ...vehicleInfo, model: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-widest">Year</label>
                      <input
                        type="text"
                        placeholder="e.g. 2022"
                        className="w-full bg-surface-container-low border border-outline-variant p-4 rounded-xl font-bold text-primary"
                        value={vehicleInfo.year}
                        onChange={(e) => setVehicleInfo({ ...vehicleInfo, year: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-on-tertiary-container" />
                    Review & Confirm
                  </h2>
                  <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Service</p>
                        <p className="text-lg font-headline font-bold text-primary">{currentService?.name}</p>
                      </div>
                      <p className="text-xl font-headline font-extrabold text-primary">£{currentService?.price}</p>
                    </div>
                    <div className="h-[1px] bg-outline-variant" />
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Schedule</p>
                        <p className="text-sm font-bold text-primary">{selectedDate} at {selectedTime}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Vehicle</p>
                        <p className="text-sm font-bold text-primary">{vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}</p>
                        <p className="text-xs text-secondary font-medium">{vehicleInfo.registration}</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-outline-variant" />
                    <div className="flex items-center gap-3 text-sm text-secondary leading-relaxed italic">
                      <Info className="w-5 h-5 text-on-tertiary-container shrink-0" />
                      By confirming, you agree to our terms of service and the workshop's cancellation policy.
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-12 flex justify-between items-center">
                {step > 1 ? (
                  <button
                    onClick={handleBack}
                    className="px-8 py-4 rounded-2xl font-bold text-secondary hover:text-primary transition-all flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : <div />}
                <button
                  onClick={step === 4 ? () => setStep(5) : handleNext}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!vehicleInfo.registration || !vehicleInfo.make))
                  }
                  className="bg-primary text-surface px-10 py-4 rounded-2xl font-bold hover:bg-primary-container transition-all shadow-xl shadow-primary/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === 4 ? "Confirm Booking" : "Continue"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-primary rounded-[40px] p-8 text-surface relative overflow-hidden">
                <h3 className="text-xl font-headline font-bold mb-8 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-on-tertiary-container" />
                  Booking Summary
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img src={garage.image} alt={garage.name} className="w-16 h-16 rounded-2xl object-cover border border-surface/10" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="text-sm font-bold">{garage.name}</h4>
                      <p className="text-[10px] text-surface/60 font-medium">{garage.location}</p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-surface/10" />
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-surface/60 font-medium">Service Fee</span>
                      <span className="font-bold">£{currentService?.price || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-surface/60 font-medium">Concierge Fee</span>
                      <span className="text-on-tertiary-container font-bold">FREE</span>
                    </div>
                    <div className="h-[1px] bg-surface/10" />
                    <div className="flex justify-between text-lg font-headline font-extrabold">
                      <span>Total</span>
                      <span className="text-on-tertiary-container">£{currentService?.price || 0}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-surface/5 rounded-full blur-2xl" />
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-[40px] border border-outline-variant shadow-sm">
                <h4 className="text-sm font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-on-tertiary-container" />
                  Why Book with Us?
                </h4>
                <ul className="space-y-4">
                  {[
                    "Transparent, upfront pricing",
                    "Verified premium workshops",
                    "Real-time service tracking",
                    "Dedicated concierge support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-medium text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-on-tertiary-container shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
