import star from 'public/images/star.svg?url';

export interface CredentialsListProps {
  className?: string;
}

export default function CredentialsList({
  className = '',
}: CredentialsListProps) {
  return (
    <div className={className}>
      <h6 className="uppercase font-bold mb-4">
        Credentials and Certifications
      </h6>
      <ul className="pl-6" style={{ listStyleImage: `url(${star.src})` }}>
        <li className="pl-2 mb-3">
          Certified Public Accountant (Florida and New York)
        </li>
        <li className="pl-2 mb-3">Accredited in Business Valuation</li>
        <li className="pl-2 mb-3">Certified in Financial Forensics</li>
        <li className="pl-2 mb-3">Certified Fraud Examiner</li>
        <li className="pl-2">Accredited Collaborative Professional</li>
      </ul>
    </div>
  );
}
