/**
 * KeyFacts Component
 * Provides semantic HTML with structured content for AI search engines
 * This component renders visually hidden but crawlable content
 */

interface KeyFact {
  label: string;
  value: string;
}

interface KeyFactsProps {
  entityName: string;
  entityType: string;
  description: string;
  facts: KeyFact[];
  services?: string[];
  locations?: string[];
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

const KeyFacts = ({
  entityName,
  entityType,
  description,
  facts,
  services,
  locations,
  contactInfo,
}: KeyFactsProps) => {
  return (
    <aside 
      aria-label={`Key facts about ${entityName}`}
      className="sr-only"
      itemScope
      itemType={`https://schema.org/${entityType}`}
    >
      <h2 itemProp="name">{entityName}</h2>
      <p itemProp="description">{description}</p>
      
      <dl>
        {facts.map((fact, index) => (
          <div key={index}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      {services && services.length > 0 && (
        <section aria-label="Services offered">
          <h3>Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index} itemProp="hasOfferCatalog">{service}</li>
            ))}
          </ul>
        </section>
      )}

      {locations && locations.length > 0 && (
        <section aria-label="Office locations">
          <h3>Locations</h3>
          <ul>
            {locations.map((location, index) => (
              <li key={index} itemProp="areaServed">{location}</li>
            ))}
          </ul>
        </section>
      )}

      {contactInfo && (
        <section aria-label="Contact information">
          <h3>Contact</h3>
          {contactInfo.phone && <p itemProp="telephone">{contactInfo.phone}</p>}
          {contactInfo.email && <p itemProp="email">{contactInfo.email}</p>}
          {contactInfo.website && <p itemProp="url">{contactInfo.website}</p>}
        </section>
      )}
    </aside>
  );
};

export default KeyFacts;
