import { calculateFootprint } from '../../../lib/scoring';
import { NextResponse } from 'next/server';

export async function GET() {
  const results = [];
  try {
    // TEST 1: Firewood cooking mountain household
    // A1 = firewood, GQ1 = mountain, GQ2 = rural_highland_mountain, A6 = firewood
    // A1 firewood for mountain = 1450. A6 firewood for mountain = 3500. Total Domain A = 4950.
    const t1 = calculateFootprint({
      GQ1: 'mountain',
      GQ2: 'rural_highland_mountain',
      A1: 'firewood',
      A6: 'firewood'
    });
    results.push({
      name: 'Firewood Mountain Household',
      passed: t1.byDomain.A === 4950,
      expected: 4950,
      actual: t1.byDomain.A
    });

    // TEST 2: B1 own vehicle zero case
    // B1 = own, B2 = car_100to300
    // B1 own = 0, B2 = 7000. Total Domain B = 7000.
    const t2 = calculateFootprint({
      B1: 'own',
      B2: 'car_100to300'
    });
    results.push({
      name: 'B1 Own Vehicle Zero',
      passed: t2.byDomain.B === 7000,
      expected: 7000,
      actual: t2.byDomain.B
    });

    // TEST 3: Multiplier question C4
    // C1 = veg (450), C4 = packaged (multiplier 2.0)
    // Total Domain C = 450 * 2 = 900
    const t3 = calculateFootprint({
      C1: 'veg',
      C4: 'packaged'
    });
    results.push({
      name: 'Multiplier C4 Packaged',
      passed: t3.byDomain.C === 900,
      expected: 900,
      actual: t3.byDomain.C
    });

    const allPassed = results.every(r => r.passed);
    return NextResponse.json({ success: allPassed, tests: results });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message, stack: err.stack });
  }
}
