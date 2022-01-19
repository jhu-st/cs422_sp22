import java.util.ArrayList;
import java.util.List;

public class Primes {

    private static boolean isDivisible (int i, int j) {
        if (j % i == 0)
            return true;
        else
            return false;
    }

    private static List<Integer> getPrimes (int n) {
        int curPrime;           // Value currently considered for primeness
        int numPrimes;          // Number of primes found so far.
        boolean isPrime;        // Is curPrime prime?
        List<Integer> primes = new ArrayList<>(); // The list of prime numbers.

        // Initialize 2 into the list of primes.
        primes.add(2);
        numPrimes = 1;
        curPrime  = 2;
        while (numPrimes < n)
        {
            curPrime++;  // next number to consider ...
            isPrime = true;
            for (int i = 0; i <= numPrimes-1; i++) {   // for each previous prime.
                if (isDivisible (primes.get(i), curPrime)) {  // Found a divisor, curPrime is not prime.
                    isPrime = false;
                    break; // out of loop through primes.
                }
            }
            if (isPrime) {   // save it!
                primes.add(curPrime);
                numPrimes++;
            }
        }  // End while

        return primes;
    }  // end printPrimes

    public static void main (String []argv) {  // Driver method for getPrimes
        // Read an integer from standard input, call getPrimes()
        int integer = 20;
        if (argv.length != 1) {
            System.out.println ("Usage: java PrintPrimes v1 ");
            return;
        }

        try {
            integer = Integer.parseInt (argv[0]);
        }
        catch (NumberFormatException e) {
            System.out.println ("Entry must be a integer, using 1.");
            integer = 1;
        }

        List<Integer> primes= getPrimes(integer);
        for (Integer p: primes)
            System.out.println(p);
    }
}