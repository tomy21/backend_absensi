export function generateNextKID(lastKID: string | null): string {
  const prefix = "700097LOC";
  let nextNumber = 1;

  if (lastKID) {
    const lastNumber = parseInt(lastKID.slice(-7));
    nextNumber = lastNumber + 1;
  }

  const paddedNumber = String(nextNumber).padStart(7, "0");
  return `${prefix}${paddedNumber}`;
}
export function extractCoordinates(url: string): string | null {
  const match = url.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
  if (!match) return null;

  const latitude = parseFloat(match[1]);
  const longitude = parseFloat(match[2]);

  return JSON.stringify({ latitude, longitude }); // hasil: '{"lat":-6.2285041,"lng":106.6089037}'
}
