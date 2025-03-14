"use client";

import { useState } from "react";
import Layout from "@/components/booking/Layout";
import Dropdown from "@/components/booking/Dropdown";
import GoogleMap from "@/components/booking/GoogleMap";
import BodyDiagram from "@/components/booking/BodyDiagram";
import Calendar from "@/components/booking/Calendar";
import RadioGroup from "@/components/booking/RadioGroup";
import Breadcrumb from "@/components/booking/Breadcrumb";
import Image from "next/image";
import styles from "@/styles/Booking.module.css";
export default function BookingPage() {
  // Current step state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Step 1: Location
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  // Step 2: Pain
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [painLevel, setPainLevel] = useState("");

  // Step 3: Service
  const [selectedService, setSelectedService] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  // Step 4: Therapist
  const [selectedTherapist, setSelectedTherapist] = useState("");

  // Step 5: Date & Time
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  // Step 6: Payment
  const [paymentMethod, setPaymentMethod] = useState("Pay on site");
  const [discountCode, setDiscountCode] = useState("");

  // Data
  const countries = [
    "Lebanon",
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
  ];

  const branches = {
    Lebanon: ["Beirut - Downtown", "Beirut - Hamra", "Jounieh"],
    "United Arab Emirates": ["Dubai - Downtown", "Dubai - Marina", "Abu Dhabi"],
    "Saudi Arabia": ["Riyadh", "Jeddah"],
    Qatar: ["Doha"],
  };

  const bodyParts = [
    "Head",
    "Neck",
    "Shoulders",
    "Chest",
    "Abs",
    "Pelvis",
    "Left Arm",
    "Right Arm",
    "Left Forearm",
    "Right Forearm",
    "Left Hand",
    "Right Hand",
    "Left Thigh",
    "Right Thigh",
    "Left Calf",
    "Right Calf",
    "Left Foot",
    "Right Foot",
    "Upper Back",
    "Lower Back",
    "Back of Head",
    "Back of Neck",
    "Back Shoulders",
    "Back Pelvis",
  ];

  const painLevels = ["Mild", "Moderate", "Severe"];

  const services = [
    "Flex Tete",
    "Flex Cut",
    "Deep Tissue Massage",
    "Sports Massage",
    "Relaxation Massage",
  ];

  const therapists = [
    "Sarah Johnson",
    "Michael Chen",
    "Aisha Al-Farsi",
    "David Rodriguez",
  ];

  // Handlers
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Step 1 handlers
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedBranch("");
  };

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
  };

  // Step 2 handlers
  const handleBodyPartSelect = (part) => {
    setSelectedBodyPart(part);
  };

  const handlePainLevelSelect = (level) => {
    setPainLevel(level);
  };

  // Step 3 handlers
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (!selectedServices.includes(service)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Step 4 handlers
  const handleTherapistSelect = (therapist) => {
    setSelectedTherapist(therapist);
  };

  // Step 5 handlers
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime("");

    // Generate available times
    if (date) {
      const times = [];
      const startHour = 9;
      const endHour = 18;

      for (let hour = startHour; hour < endHour; hour++) {
        times.push(`${hour}:00`);
        times.push(`${hour}:30`);
      }

      const available = times.filter(() => Math.random() > 0.3);
      setAvailableTimes(available);
    } else {
      setAvailableTimes([]);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Step 6 handlers
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleConfirmBooking = () => {
    alert("Booking confirmed!");
    // Reset form and go back to step 1
    setCurrentStep(1);
    setSelectedCountry("");
    setSelectedBranch("");
    setSelectedBodyPart("");
    setPainLevel("");
    setSelectedService("");
    setSelectedServices([]);
    setSelectedTherapist("");
    setSelectedDate(null);
    setSelectedTime("");
    setPaymentMethod("Pay on site");
    setDiscountCode("");
  };

  // Get step title
  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "CHOOSE A LOCATION.";
      case 2:
        return "TELL US WHERE IT HURTS.";
      case 3:
        return "CHOOSE YOUR SERVICE.";
      case 4:
        return "CHOOSE YOUR THERAPIST.";
      case 5:
        return "BOOK YOUR DATE AND TIME.";
      case 6:
        return "FINALIZE YOUR BOOKING.";
      default:
        return "";
    }
  };

  // Get step subtitle
  const getStepSubtitle = () => {
    switch (currentStep) {
      case 1:
        return "Select your country of residence and which branch to have your session(s) in";
      case 2:
        return "Select the area of discomfort from the image or the menu";
      case 3:
        return "Select a service from the menu or go with one of our suggested picks";
      case 4:
        return "Select one of our experienced staff or leave it to us to choose for you";
      case 5:
        return "Select a time you wish to have your Flex Studio session(s)";
      case 6:
        return "Select a payment method to finalize your booking";
      default:
        return "";
    }
  };

  // Generate breadcrumb items
  const getBreadcrumbItems = () => {
    const items = [
      { label: "LOCATION", active: currentStep === 1 },
      { label: "PAIN", active: currentStep === 2 },
      { label: "SERVICE", active: currentStep === 3 },
      { label: "THERAPIST", active: currentStep === 4 },
      { label: "DATE & TIME", active: currentStep === 5 },
      { label: "PAYMENT", active: currentStep === 6 },
    ];

    return items.slice(0, currentStep);
  };

  return (
    <Layout
      title={getStepTitle()}
      step={currentStep}
      totalSteps={totalSteps}
      bgColor={currentStep === 6 ? "light" : "dark"}
      customNextStep={nextStep}
      customPrevStep={prevStep}
      showNavButtons={true}
    >
      {currentStep > 1 && <Breadcrumb items={getBreadcrumbItems()} />}

      <p className={styles.pageSubtitle}>{getStepSubtitle()}</p>

      {/* Step 1: Location */}
      {currentStep === 1 && (
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <Dropdown
              options={countries}
              placeholder="SELECT YOUR COUNTRY"
              onSelect={handleCountrySelect}
              value={selectedCountry}
            />

            {selectedCountry && (
              <div className={styles.marginTop}>
                <Dropdown
                  options={branches[selectedCountry] || []}
                  placeholder="SELECT A BRANCH"
                  onSelect={handleBranchSelect}
                  value={selectedBranch}
                />
              </div>
            )}
          </div>

          <div className={styles.flexColumn}>
            <GoogleMap
              center={
                selectedCountry === "Lebanon"
                  ? { lat: 33.8869, lng: 35.5131 }
                  : selectedCountry === "United Arab Emirates"
                  ? { lat: 25.2048, lng: 55.2708 }
                  : selectedCountry === "Saudi Arabia"
                  ? { lat: 24.7136, lng: 46.6753 }
                  : selectedCountry === "Qatar"
                  ? { lat: 25.2854, lng: 51.531 }
                  : { lat: 33.8869, lng: 35.5131 }
              }
            />
          </div>
        </div>
      )}

      {/* Step 2: Pain */}
      {currentStep === 2 && (
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <Dropdown
              options={bodyParts}
              placeholder="SELECT THE BODY PART IN PAIN"
              onSelect={handleBodyPartSelect}
              value={selectedBodyPart}
            />

            {selectedBodyPart && (
              <div className={styles.marginTop}>
                <Dropdown
                  options={painLevels}
                  placeholder="SELECT PAIN LEVEL"
                  onSelect={handlePainLevelSelect}
                  value={painLevel}
                />
              </div>
            )}

            {selectedBodyPart && painLevel && (
              <div className={styles.painSummary}>
                <h3>Pain Summary</h3>
                <div className={styles.painDetail}>
                  <span className={styles.painLabel}>Location:</span>
                  <span className={styles.painValue}>{selectedBodyPart}</span>
                </div>
                <div className={styles.painDetail}>
                  <span className={styles.painLabel}>Intensity:</span>
                  <span className={styles.painValue}>{painLevel}</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.flexColumnWide}>
            <BodyDiagram
              onSelectBodyPart={handleBodyPartSelect}
              selectedPart={selectedBodyPart}
            />
          </div>
        </div>
      )}

      {/* Step 3: Service */}
      {currentStep === 3 && (
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <Dropdown
              options={services}
              placeholder="SELECT A SERVICE"
              onSelect={handleServiceSelect}
              value={selectedService}
            />

            <div className={styles.marginTop2}>
              <h3 className={styles.serviceHeader}>OUR RECOMMENDATION</h3>

              <div className={styles.serviceList}>
                {services.slice(0, 2).map((service, index) => (
                  <div key={index} className={styles.serviceItem}>
                    <div
                      className={`${styles.radioCustom} ${
                        selectedServices.includes(service)
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => toggleService(service)}
                    />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.flexColumnWide}>
            <div className={styles.imageContainer}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-14%20220949-SqidgWdM9kSKZQmYqAaObddMRDGmMY.png"
                alt="Service Image"
                width={500}
                height={400}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Therapist */}
      {currentStep === 4 && (
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <Dropdown
              options={therapists}
              placeholder="SELECT A THERAPIST"
              onSelect={handleTherapistSelect}
              value={selectedTherapist}
            />
          </div>

          <div className={styles.flexColumnWide}>
            {selectedTherapist && (
              <div className={styles.therapistImageContainer}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-14%20221003-iW7ph7PKdrL5AzLDiT1GVLLegHIFRj.png"
                  alt="Therapist"
                  width={200}
                  height={250}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 5: Date & Time */}
      {currentStep === 5 && (
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <Dropdown
              options={availableTimes}
              placeholder="SELECT A TIME"
              onSelect={handleTimeSelect}
              value={selectedTime}
              disabled={!selectedDate}
            />
          </div>

          <div className={styles.flexColumn}>
            <Calendar
              onSelectDate={handleDateSelect}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      )}

      {/* Step 6: Payment */}
      {currentStep === 6 && (
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <RadioGroup
              options={["Pay on site", "Pay with credit card"]}
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            />

            {paymentMethod === "Pay with credit card" && (
              <div className={styles.marginTop}>
                <p>20% DISCOUNT</p>
                {/* Credit card form would go here */}
              </div>
            )}

            <button
              className={styles.primaryButton}
              style={{
                marginTop: "2rem",
                backgroundColor:
                  paymentMethod === "Pay on site" ? "#FF4500" : "#e6a795",
              }}
              onClick={handleConfirmBooking}
            >
              CONFIRM BOOKING
            </button>
          </div>

          <div className={styles.flexColumn}>
            <div className={styles.serviceDetails}>
              <div className={styles.serviceImageSmall}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-14%20220949-SqidgWdM9kSKZQmYqAaObddMRDGmMY.png"
                  alt="Service"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </div>
              <div className={styles.serviceName}>
                <h3>Flex Tete</h3>
              </div>
              <div className={styles.serviceQuantity}>
                <div>1</div>
                <div style={{ fontWeight: "bold" }}>$50.00</div>
              </div>
            </div>

            <input
              type="text"
              className={styles.discountCode}
              placeholder="Discount Code or Gift Card"
              value={discountCode}
              onChange={handleDiscountCodeChange}
            />

            <div className={styles.checkoutSummary}>
              <div className={styles.checkoutRow}>
                <div>TOTAL</div>
                <div className={styles.checkoutTotal}>$50.00</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
