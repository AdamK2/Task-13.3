// Ustawienia odpowiedniego enkodowania przyjmowanych danych. 
// Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego mówimy (odczyta wartość jako string z kodowaniem UTF-8)
process.stdin.setEncoding('utf-8');

// Ustawienie nasłuchiwania na zdarzenia odczytu.
// Kod ponizej można odczytać: "na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...)".
process.stdin.on('readable', function() {
    // Metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
	// Opakowanie funkcji odczytu instrukcją warunkową "if" sprawdzającą, czy na wejściu cokolwiek istnieje.
    if (input !== null) {
		// Metoda .trim(). Dzięki niej pozbywamy się wszystkich białych znaków z przodu i za tekstem.
        var instruction = input.toString().trim();
		
		// Jesli zytkownik wpisze "node", nastapi Wyswietlenie informacji o wersji Node, z której korzysta użytkownik i program dalej dziala.
		if (instruction === 'node') {
            process.stdout.write('You use version ' + process.versions.node + ' of Node.\n');	       
		}
		// Jesli uzytkownik wpisze "/exit", nastepuje wyswietlenie "Quitting app!" i zakonczenie dzialania programu.
        else if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
			// Wyswietlenie informacji o wersji Node, z której korzysta użytkownik.
			process.exit();		
		}
		// Jesli uzytkownik wpisze cos innego niz "/exit", nastepuje wyswietlenie "Wrong instruction!" i program dalej dziala.
        else {			
            process.stderr.write('Wrong instruction!\n');
        }
    }
});