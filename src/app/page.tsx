import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ShieldIcon, type ShieldIconName } from "@/components/ShieldIcon";

// Reusable icons for situations and fits
const situations: { icon: ShieldIconName; title: string; desc: string }[] = [
  { icon: "badge", title: "Restricted Area Access", desc: "Verifying credentials at client-authorized access points; security-sensitive areas and runways are supported only when separately authorized and appropriately credentialed." },
  { icon: "clipboard", title: "Vendor & Employee Check-in", desc: "Checking badges and logging airport-adjacent business employees, delivery trucks, and operations staff." },
  { icon: "parking", title: "Parking Lot Monitoring", desc: "Conducting visible patrols to help deter vehicle theft and vandalism, with prompt incident reporting." },
  { icon: "crowd", title: "Passenger Flow Support", desc: "Assisting with crowd direction and queue management during peak flight schedules and travel seasons." },
  { icon: "baggage", title: "Unattended Items", desc: "Quickly identifying, reporting, and securing areas with unattended luggage or packages per protocol." },
  { icon: "search", title: "Suspicious Activity", desc: "Reporting behavior that violates specific site rules or presents an observable safety concern, without implying photography alone is unlawful." },
  { icon: "perimeter", title: "Perimeter Concerns", desc: "Conducting regular fencing inspections and gate monitoring to help deter trespassers from entering restricted perimeters." },
  { icon: "cargo", title: "Cargo Area Monitoring", desc: "Monitoring shipping bays, loading docks, and air cargo warehousing facilities holding valuable goods." },
  { icon: "bus", title: "Transportation Issues", desc: "Assisting transit buses, taxis, rideshares, and shuttle services with designated pickup and drop-off flow." },
  { icon: "lock", title: "After-Hours Facility Patrol", desc: "Checking that airport-connected retail, dining, and storage facilities remain locked and monitored during off-hours." },
];

const properties: { icon: ShieldIconName; label: string }[] = [
  { icon: "plane", label: "Airport Facilities" },
  { icon: "terminal", label: "Private Terminals" },
  { icon: "cargo", label: "Cargo Facilities" },
  { icon: "parking", label: "Airport Parking Lots" },
  { icon: "hub", label: "Transportation Hubs" },
  { icon: "bus", label: "Shuttle Areas" },
  { icon: "warehouse", label: "Airport-Adjacent Warehouses" },
  { icon: "commercial", label: "Commercial Properties" },
];

const coverageOptions = [
  { service: "Day & Peak Travel Operations", schedule: "Sample: Daytime Hours", desc: "Managing access control, supporting passenger flow, and coordinating vendor deliveries as defined in the facility agreement." },
  { service: "Overnight & After-Hours Security", schedule: "Sample: 6 PM - 6 AM", desc: "Perimeter fence inspections, checking unused facilities, and monitoring cargo areas (hours and staffing are determined by the facility agreement)." },
  { service: "24/7 Terminal & Parking Patrols", schedule: "Sample / By Agreement", desc: "Scheduled patrols during contracted coverage hours, with routes and frequency defined in the site post orders." },
  { service: "Operations & Incident Response", schedule: "On-Duty / Contracted", desc: "Prompt observation, reporting, and escalation of unattended items, suspicious activities, or alarm triggers per site protocol." },
];

export default function AirportSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a4ec5014fbc0a8906402580.webp"
            alt="Secure Guard security officer standing in front of an airport terminal runway at twilight"
            fill
            className={styles.heroBgImg}
            priority
            unoptimized
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Airport Security Services
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Support Safe Movement, Access Control, <span className={styles.heroTitleAccent}>and Security Around High-Traffic Airport Areas</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard provides security support for airport-adjacent commercial property, parking, cargo, and terminal support only where SGSS is authorized to operate—including access control, perimeter monitoring, vendor check-in, passenger flow support, facility patrols, and incident reporting.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Challenges of Constant Movement <span className={styles.titleAccent}>and Restricted Spaces</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Airports and airport-related facilities operate with constant movement. Passengers, employees, vendors, transportation providers, cargo teams, and service vehicles all need access to different areas.
              </p>
              <p className={styles.bodyText}>
                Security concerns can include restricted access, crowd movement, unattended items, parking issues, vendor access, employee safety, and coordination with airport operations. Clients need security personnel who understand that airport environments require attention, communication, and professionalism.
              </p>
            </div>
            <div className={styles.whyCards}>
              {(
                [
                  { icon: "badge", title: "Restricted Access Control", desc: "Managing secure boundaries, employee badges, and authorized personnel zones without causing operations bottlenecks." },
                  { icon: "crowd", title: "High-Traffic Crowd Flow", desc: "Supporting queue management and passenger movement in designated areas under airport-operator instructions." },
                  { icon: "baggage", title: "Unattended Baggage", desc: "Managing risks from unattended luggage, vendor parcels, or suspicious cargo items through strict reporting procedures." },
                  { icon: "perimeter", title: "Vast Perimeter Patrols", desc: "Inspecting outer fences, parking areas, cargo facilities, and hangar entrances against trespassers." },
                ] as { icon: ShieldIconName; title: string; desc: string }[]
              ).map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <ShieldIcon name={c.icon} size={36} className={styles.whyCardIcon} />
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://assets.cdn.filesafe.space/ApWkZ2IFXdvkS2AT3Tqg/media/6a4ec501ac2f159bb07d1680.webp" 
                alt="Secure Guard officer patrolling airport facility cargo hangar boundary" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Visible Patrols & <span className={styles.titleAccent}>Airport-Adjacent Security Support</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides security support for airport-adjacent commercial property, parking, cargo, and terminal support only where SGSS is authorized to operate, covering access control, perimeter monitoring, employee entrances, vendor check-in, facility patrols, and incident reporting.
              </p>
              <p className={styles.bodyText}>
                Our team can support airport-adjacent facilities, transportation areas, cargo operations, private terminals, parking operations, and commercial properties connected to airport activity, with standing guards, mobile patrols, and specialized duties scoped per your service agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE (TOWER SECTION APPROACH) ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Flexible Security Scheduling <span className={styles.titleAccentGold}>for Airport Operations</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Sample schedules are shown below; actual coverage hours, patrol routes, and staffing levels are determined by your facility&apos;s service agreement.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you gain a dedicated security partner focused on supporting passenger movement, deterring trespasser activity, and reporting operational incidents promptly.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Improved control of access points",
                "Support for high-traffic areas",
                "Visible deterrence around restricted spaces",
                "Documented activity and incidents",
                "Better coordination with staff and operations teams",
                "Support for passenger, employee, and vendor safety",
                "Flexible coverage for day, night, and peak travel periods",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>
                    <ShieldIcon name="check" size={26} />
                  </span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Airport Security <span className={styles.titleAccent}>Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>
                    <ShieldIcon name={sit.icon} size={32} />
                  </span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Facilities We <span className={styles.titleAccentGold}>Secure & Manage</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our specialized airport-adjacent security operations are ideal for a range of logistics, passenger, and commercial environments connected to airport hubs.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>
                  <ShieldIcon name={prop.icon} size={40} />
                </div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
