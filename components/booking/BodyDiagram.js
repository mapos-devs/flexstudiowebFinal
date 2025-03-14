import { useState } from "react";
import styles from "@/styles/Booking.module.css";

export default function BodyDiagram({ onSelectBodyPart, selectedPart }) {
  const [view, setView] = useState("front");

  // More anatomically correct body parts with improved paths
  const bodyParts = {
    front: [
      {
        id: "head",
        name: "Head",
        path: "M280,40 C305,40 325,65 325,90 C325,115 305,140 280,140 C255,140 235,115 235,90 C235,65 255,40 280,40 Z",
        features: [
          // Eyes
          "M265,75 A5,5 0 0,1 275,75",
          "M285,75 A5,5 0 0,1 295,75",
          // Mouth
          "M270,100 Q280,110 290,100",
        ],
      },
      {
        id: "neck",
        name: "Neck",
        path: "M265,140 L295,140 L295,160 L265,160 Z",
      },
      {
        id: "shoulders",
        name: "Shoulders",
        path: "M225,160 L335,160 L345,180 L215,180 Z",
      },
      {
        id: "chest",
        name: "Chest",
        path: "M235,180 L325,180 L325,240 L235,240 Z",
      },
      { id: "abs", name: "Abs", path: "M245,240 L315,240 L315,300 L245,300 Z" },
      {
        id: "pelvis",
        name: "Pelvis",
        path: "M245,300 L315,300 L325,330 L235,330 Z",
      },
      {
        id: "leftArm",
        name: "Left Arm",
        path: "M215,180 L235,180 L235,240 L215,240 L205,270 L185,280 L175,260 L195,230 Z",
      },
      {
        id: "rightArm",
        name: "Right Arm",
        path: "M345,180 L325,180 L325,240 L345,240 L355,270 L375,280 L385,260 L365,230 Z",
      },
      {
        id: "leftForearm",
        name: "Left Forearm",
        path: "M175,260 L185,280 L165,330 L145,325 L155,275 Z",
      },
      {
        id: "rightForearm",
        name: "Right Forearm",
        path: "M385,260 L375,280 L395,330 L415,325 L405,275 Z",
      },
      {
        id: "leftHand",
        name: "Left Hand",
        path: "M145,325 L165,330 L160,360 L130,355 Z",
      },
      {
        id: "rightHand",
        name: "Right Hand",
        path: "M415,325 L395,330 L400,360 L430,355 Z",
      },
      {
        id: "leftThigh",
        name: "Left Thigh",
        path: "M235,330 L280,330 L280,420 L250,420 L235,330 Z",
      },
      {
        id: "rightThigh",
        name: "Right Thigh",
        path: "M280,330 L325,330 L310,420 L280,420 L280,330 Z",
      },
      {
        id: "leftCalf",
        name: "Left Calf",
        path: "M250,420 L280,420 L280,500 L260,500 L250,420 Z",
      },
      {
        id: "rightCalf",
        name: "Right Calf",
        path: "M280,420 L310,420 L300,500 L280,500 L280,420 Z",
      },
      {
        id: "leftFoot",
        name: "Left Foot",
        path: "M260,500 L280,500 L280,515 L240,515 L260,500 Z",
      },
      {
        id: "rightFoot",
        name: "Right Foot",
        path: "M280,500 L300,500 L320,515 L280,515 L280,500 Z",
      },
    ],
    back: [
      {
        id: "backHead",
        name: "Back of Head",
        path: "M280,40 C305,40 325,65 325,90 C325,115 305,140 280,140 C255,140 235,115 235,90 C235,65 255,40 280,40 Z",
        features: [
          // Hair indication
          "M260,50 Q280,30 300,50",
          "M255,60 Q280,40 305,60",
          "M250,70 Q280,50 310,70",
        ],
      },
      {
        id: "backNeck",
        name: "Back of Neck",
        path: "M265,140 L295,140 L295,160 L265,160 Z",
      },
      {
        id: "backShoulders",
        name: "Back Shoulders",
        path: "M225,160 L335,160 L345,180 L215,180 Z",
      },
      {
        id: "upperBack",
        name: "Upper Back",
        path: "M235,180 L325,180 L325,240 L235,240 Z",
      },
      {
        id: "lowerBack",
        name: "Lower Back",
        path: "M245,240 L315,240 L315,300 L245,300 Z",
      },
      {
        id: "backPelvis",
        name: "Back Pelvis",
        path: "M245,300 L315,300 L325,330 L235,330 Z",
      },
      {
        id: "backLeftArm",
        name: "Back Left Arm",
        path: "M215,180 L235,180 L235,240 L215,240 L205,270 L185,280 L175,260 L195,230 Z",
      },
      {
        id: "backRightArm",
        name: "Back Right Arm",
        path: "M345,180 L325,180 L325,240 L345,240 L355,270 L375,280 L385,260 L365,230 Z",
      },
      {
        id: "backLeftForearm",
        name: "Back Left Forearm",
        path: "M175,260 L185,280 L165,330 L145,325 L155,275 Z",
      },
      {
        id: "backRightForearm",
        name: "Back Right Forearm",
        path: "M385,260 L375,280 L395,330 L415,325 L405,275 Z",
      },
      {
        id: "backLeftHand",
        name: "Back Left Hand",
        path: "M145,325 L165,330 L160,360 L130,355 Z",
      },
      {
        id: "backRightHand",
        name: "Back Right Hand",
        path: "M415,325 L395,330 L400,360 L430,355 Z",
      },
      {
        id: "backLeftThigh",
        name: "Back Left Thigh",
        path: "M235,330 L280,330 L280,420 L250,420 L235,330 Z",
      },
      {
        id: "backRightThigh",
        name: "Back Right Thigh",
        path: "M280,330 L325,330 L310,420 L280,420 L280,330 Z",
      },
      {
        id: "backLeftCalf",
        name: "Back Left Calf",
        path: "M250,420 L280,420 L280,500 L260,500 L250,420 Z",
      },
      {
        id: "backRightCalf",
        name: "Back Right Calf",
        path: "M280,420 L310,420 L300,500 L280,500 L280,420 Z",
      },
      {
        id: "backLeftFoot",
        name: "Back Left Foot",
        path: "M260,500 L280,500 L280,515 L240,515 L260,500 Z",
      },
      {
        id: "backRightFoot",
        name: "Back Right Foot",
        path: "M280,500 L300,500 L320,515 L280,515 L280,500 Z",
      },
    ],
  };

  const handleClick = (part) => {
    onSelectBodyPart(part);
  };

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className={styles.bodyDiagramContainer}>
      <div className={styles.viewToggle}>
        <button
          className={`${styles.viewToggleButton} ${
            view === "front" ? styles.viewToggleActive : ""
          }`}
          onClick={() => toggleView("front")}
        >
          Front View
        </button>
        <button
          className={`${styles.viewToggleButton} ${
            view === "back" ? styles.viewToggleActive : ""
          }`}
          onClick={() => toggleView("back")}
        >
          Back View
        </button>
      </div>
      <div className={styles.bodyDiagram}>
        <svg width="400" height="520" viewBox="0 0 560 520">
          <defs>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 15 -5"
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient
              id="bodyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f0f0f0" />
              <stop offset="100%" stopColor="#e0e0e0" />
            </linearGradient>
            <linearGradient
              id="selectedGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6b45" />
              <stop offset="100%" stopColor="#ff4500" />
            </linearGradient>
          </defs>

          {view === "front" ? (
            <g id="front-view">
              <text x="280" y="20" className={styles.viewLabel}>
                Front View
              </text>
              {bodyParts.front.map((part) => (
                <g key={part.id}>
                  <path
                    id={part.id}
                    d={part.path}
                    className={`${styles.bodyPart} ${
                      selectedPart === part.name ? styles.selected : ""
                    }`}
                    onClick={() => handleClick(part.name)}
                    fill={
                      selectedPart === part.name
                        ? "url(#selectedGradient)"
                        : "url(#bodyGradient)"
                    }
                  />
                  {part.features &&
                    part.features.map((feature, index) => (
                      <path
                        key={`${part.id}-feature-${index}`}
                        d={feature}
                        className={styles.bodyFeature}
                        fill="none"
                        stroke="#333"
                        strokeWidth="1"
                      />
                    ))}
                </g>
              ))}
            </g>
          ) : (
            <g id="back-view">
              <text x="280" y="20" className={styles.viewLabel}>
                Back View
              </text>
              {bodyParts.back.map((part) => (
                <g key={part.id}>
                  <path
                    id={part.id}
                    d={part.path}
                    className={`${styles.bodyPart} ${
                      selectedPart === part.name ? styles.selected : ""
                    }`}
                    onClick={() => handleClick(part.name)}
                    fill={
                      selectedPart === part.name
                        ? "url(#selectedGradient)"
                        : "url(#bodyGradient)"
                    }
                  />
                  {part.features &&
                    part.features.map((feature, index) => (
                      <path
                        key={`${part.id}-feature-${index}`}
                        d={feature}
                        className={styles.bodyFeature}
                        fill="none"
                        stroke="#333"
                        strokeWidth="1"
                      />
                    ))}
                </g>
              ))}
            </g>
          )}
        </svg>

        {selectedPart && (
          <div className={styles.selectedPartInfo}>
            <span>Selected: {selectedPart}</span>
          </div>
        )}
      </div>
    </div>
  );
}
