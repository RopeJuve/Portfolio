"use client";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import { useConsent } from "./useConsent";

const ConsentBar = () => {
  const { showBar, handleAccept, handleReject, barRef } = useConsent();

  if (!showBar) return null;

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Consent"
      className="fixed inset-x-0 bottom-0 z-[80] isolate border-t border-ink bg-bone pb-[max(1rem,env(safe-area-inset-bottom))] pt-4"
    >
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-meta uppercase text-ink">Count this visit</p>
        <div className="flex items-center gap-3">
          <Button
            usedAs="button"
            type="button"
            variant="secondary"
            text="Reject"
            onClick={handleReject}
          />
          <Button
            usedAs="button"
            type="button"
            variant="primary"
            text="Accept"
            onClick={handleAccept}
          />
        </div>
      </Container>
    </div>
  );
};

export default ConsentBar;
