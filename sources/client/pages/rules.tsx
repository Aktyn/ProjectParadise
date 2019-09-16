import * as React from 'react';
import Container from "../components/container";

// import '../styles/home.scss';

export default class Rules extends React.Component {
	
	render() {
		return <Container title={'Regulamin'}>
			<ol>
				<li><h4>§1. Postanowienia ogólne</h4>
					<ol>
						<li>Każdy gracz serwera jest zobowiązany do przestrzegania regulaminu</li>
						<li>Nieznajomość regulaminu nie zwalnia z jego przestrzegania</li>
						<li>Administracja ma prawo karać za czyny, które uzna za działające na szkodę serwera, nawet
							jeśli nie ma ich uwzględnionych w regulaminie
						</li>
						<li>Administracja ma prawo do modyfikowania lub zmieniania punktów regulaminu</li>
						<li>Gracz zobowiązany jest do zapoznania się z netykietą i przestrzegania jej</li>
						<li>Rozgrywka na serwerze osadzona jest w realiach współczesnego Los Angeles</li>
					</ol>
				</li>
				
				
				<li><h4>§2. Ogólne Zasady</h4>
					<ol>
						<li>Zakaz korzystania z jakichkolwiek skryptów, cheatów, exploitów, bugów lub modów dających
							przewagę w grze
						</li>
						<li>Wszystkie błędy znalezione na serwerze muszą być niezwłocznie zgłoszone Administracji, a ich
							wykorzystywanie jest zabronione
						</li>
						<li>Zakaz wychodzenia z serwera podczas odgrywanej akcji RP</li>
						<li>Jeśli podczas wykonywanej akcji RolePlay zostaniesz wyrzucony z serwera, musisz
							natychmiastowo
							napisać na Discordzie informując o sytuacji
						</li>
						<li>Jeśli zostałeś wyrzucony z serwera podczas odgrywania akcji. Po powrocie na serwer musisz
							odnaleźć osobę z którą miałeś interakcję i kontynuować
						</li>
					</ol>
				</li>
				
				<li><h4>§3. Komunikacja Voice, czaty i narracja</h4>
					<ol>
						<li>Zabrania się nadużywania chatów OOC oraz nadmiernego używania wulgaryzmów na tych chatach
						</li>
						<li>Korzystanie z czatów OOC ograniczamy do minimum. Nie prowadzimy na nich rozmów towarzyskich
							(Pisanie z kimś bez celu lub przywitanie się na czacie ooc będzie karane)
						</li>
						<li>Musisz posiadać sprawnie działający mikrofon, aby móc grać na serwerze. Musisz również z
							niego
							aktywnie korzystać, służy do tego przycisk [N]
						</li>
						<li>Zakaz wykorzystywania czatu głosowego do spraw OOC. Czat głosowy służy jedynie do IC. Jeśli
							chcesz skorzystać z OOC użyj komendy /ooc lub napisz na discordzie, bądź na forum serwera
						</li>
						<li>Do prowadzenia narracji podczas rozgrywki służą komendy /me, /do oraz /med do odgrywania
							akcji z
							medykami
						</li>
						<li>Kłamanie używając komendy /do jest zabronione</li>
						<li>Zakaz rozpoznawania osób po głosie, gdy WYRAŹNIE słychać że próbują go zmienić lub używają
							modulatorów
						</li>
						<li>Nagrania z serwera np. klipy Twitch mogą być wykorzystane IC pod warunkiem że osoba
							nagrywająca
							odegra komendą /me oraz animacją włączenie nagrywania w telefonie lub innym urządzeniu
							rejestrującym
							<ul>
								<li>LSPD/EMS może wykorzystywać nagrania, które zostały zarejestrowane poprzez
									bodycam'y, kamerę w radiowozie lub w budynkach państwowych (Komisariaty, Szpitale)
								</li>
							</ul>
						</li>
						
						<li>Dostęp do radia (ts lub dc) ma tylko EMS oraz LSPD. Jakiekolwiek porozumiewanie się przez
							zewnętrze komunikatory (ts, dc) osób nienależących do tych dwóch frakcji zostanie uznane za
							MetaGaming
						</li>
					</ol>
				</li>
				
				<li><h4>§4. Postaci</h4>
					<ol>
						<li>Gracz może mieć więcej niż jedną postać tylko za pozwoleniem administracji, jednak łączenie
							ich
							w jakikolwiek sposób jest zabronione
						</li>
						<li>Gracz jest zobowiązany do przemyślanego kreowania własnej postaci, dotyczy to również
							spójności
							tematycznej grup, do których dołącza
						</li>
						<li>Imię i nazwisko postaci musi być napisane alfabetem łacińskim i musi być anglojęzyczne. Nie
							może
							należeć do sławnej osoby z rzeczywistości lub sławnej fikcyjnej postaci (Celebrity Name)
						</li>
						<li>Przekazywanie majątku między postaciami jednego gracza jest zabronione</li>
						<li>Przekazywanie lub pozbywanie się majątków przed planowanym uśmierceniem postaci lub
							zaprzestaniem rozgrywki jest zabronione. Aby uzyskać taką możliwość, należy zgłosić chęć
							odegrania akcji Administracji
						</li>
						<li>Odgrywanie psychicznie chorej postaci w celu uniknięcia konsekwencji lub jako wymówka do
							swoich
							akcji jest zabroniona. Zabrania się również przeprowadzania aktów terrorystycznych
						</li>
						<li>Odgrywaj postać z odpowiednią wiedzą OOC na jej temat, Tyczy się to postaci policjantów,
							lekarzy, prawników, gangsterów itp.
						</li>
					</ol>
				</li>
				
				<li><h4>§5. Przestępstwa</h4>
					<ol>
						<li>Zabrania się popełniania brutalnych przestępstw, otwartych napaści i morderstw w miejscach
							użytku publicznego, budynkach rządowych, oskryptowanych miejscach prac i miejscach z reguły
							uczęszczanych przez dużą ilość ludzi.
						</li>
						<li>Wchodzenie z bronią na komisariat jest zabronione. Tyczy się to przede wszystkim prób
							odbijania
							osób będących w areszcie!
						</li>
						<li>Zakaz przeprowadzania porwań z okupem, gdy na serwerze jest mniej niż 3 policjantów na
							służbie
						</li>
						<li>Zlecenia zabójstw są dozwolone, aczkolwiek nie mogą one być wymierzone w osoby pracujące w
							służbach porządkowych. Zlecenia również muszą być sprecyzowane (Imię, Nazwisko oraz dokładny
							wygląd.) i mieć podstawy fabularne
						</li>
						<li>Zakaz okradania się w miejscach zbiorowych służących do podjęcia pracy</li>
						<li>Zakaz używania usług znajdujących się w telefonie w celu napadnięcia kierowcy lub klientów
							zaznaczonych na GPS
						</li>
						<li>Zakaz nadużywania broni palnej i białej oraz bezpodstawnego otwierania ognia</li>
						<li>Zabicie NPC jest kwalifikowane jako popełnienie morderstwa na normalnym obywatelu</li>
						<li>Zakaz odgrywania napaści na tle seksualnym oraz powodowania ran trwałych bez zgody obu stron
						</li>
						<li>Napady:
							<ul>
								<li>Napad na sklep można wykonać w grupie nie przekraczającej 3 napastników, gdy na
									służbie jest conajmniej 2 policjantów
								</li>
								<li>Napad na mniejszy bank/jubilera można wykonać w grupie nie przekraczającej 4
									napastników, gdy na służbie jest conajmniej 3 policjantów
								</li>
								<li>Napad na bank centralny można wykonać w grupie nie przekraczającej 5 napastników,
									gdy na służbie jest conajmniej 4 policjantów
								</li>
								<li>Zakładnicy do napadu mogą być podstawieni tylko jeśli mamy juz porwanych zakładników
									w proporcjach 1:1 (jeśli mamy 2 porwanych możemy podstawić maksymalnie 2)
								</li>
							</ul>
						</li>
					
					</ol>
				</li>
				
				<li><h4>§6. Stan zdrowotny postaci</h4>
					<ol>
						<li>Gdy w stanie BW spowodowanej ingerencją gracza odrodzisz się w szpitalu, Twoja postać nie
							pamięta co wydarzyło się przed incydentem oraz kto brał w nim udział
						</li>
						<li>Nieposzanowanie życia swojej postaci jest postrzegane za FailRP (oprócz postaci
							samobójczych).
							Przykład: Podpuszczanie napastnika do strzelenia do nas
						</li>
						<li>Podczas odgrywania ran postaci, muszą być one adekwatne do obrażeń, które poniosła postać.
							Przykład: Skok z drugiego piętra – połamane kości
						</li>
						<li>Gracz, którego postać została doprowadzona do stanu omdlenia w wyniku obrażeń (BW) jest
							zobowiązany do odgrywania ich przez minimum godzinę od zajścia zdarzenia. Przez ten czas
							zabronione jest branie udziału w strzelaninach lub innych akcjach RP zagrażających twojemu
							zdrowiu
						</li>
						<li>Utrata punktów zdrowia w przypadku obrażeń fizycznych lub głodu obliguje gracza do odegrania
							obrażeń, które uzyskała postać
						</li>
						<li>Jeśli lekarz zadecyduje, że na skutek poważnych obrażeń musisz udać się do szpitala, to
							jesteś
							zobowiązany to zrobić
						</li>
						<li>O zabiciu postaci (CK) może zadecydować jedynie jej właściciel oraz administracja. Decyzja
							gracza musi zostać poparta podaniem na forum w odpowiednim dziale
						</li>
						<li>Odgrywanie martwego lub ran śmiertelnych jest równoznaczne z CK</li>
						<li>Nie można zabierać danej osoby spod rąk Medyka jeśli jest w trakcie reanimacji.</li>
						<li>Osoba nieprzytomna może być przeniesiona i wywieziona pod Warunkiem jeśli nikt nie wezwał
							pomocy
							medycznej.
						</li>
					</ol>
				</li>
				
				<li><h4>§7. Pojazdy i przedmioty</h4>
					<ol>
						<li>Prowadząc pojazd należy brać pod uwagę podstawowe prawa fizyki, które nie zostały
							uwzględnione
							ze względu na ograniczenia techniczne i zachowywać się na drodze zgodnie z tymi prawami i
							zdrowym rozsądkiem.
						</li>
						<li>Pojazdy użytkowane niezgodnie z regulaminem mogą zostać usunięte</li>
						<li>Zakaz wykorzystywania pojazdów frakcji takich jak taksówki, radiowozy, ambulanse do prac
							dorywczych i nielegalnych.
						</li>
						<li>Przedmioty w ekwipunku postaci lub dowolnym miejscu przeznaczonym do ich przechowywania,
							znajdują się tam fizycznie w każdej sytuacji. Można je znaleźć i zabronione jest rozgrywanie
							ich
							braku lub ukrywania w najdziwniejszych miejscach na siłę, przy pomocy narracji
						</li>
						<li>Podczas interakcji z przedmiotami należy brać pod uwagę ich atrybuty fizyczne oraz
							dostosować
							rozgrywkę do możliwości fizycznych postaci
						</li>
						<li>Przedmioty oskryptowane nie mogą zostać odegrane przy pomocy narracji w przypadku braku ich
							posiadania przez postać
						</li>
						<li>Zabroniona jest kradzież pojazdów LSPD, EMS. Wyjątek stanowi kradzież podpięta pod akcę RP
							np.
							kradzież radiowozu w celu uniknięcia odsiadki
						</li>
					</ol>
				</li>
				
				<li><h4>§8. Organizacje</h4>
					<ol>
						<li>Ilość osób w grupie przestępczej nie jest ograniczona, lecz maksymalna liczba graczy z
							jednej
							grupy podczas akcji RP to 6
						</li>
						<li>Policja korzystając z radia musi również mówić w grze jeśli w pobliżu są inni gracze. Nie
							dotyczy to sytuacji w której policjant znajduje się w radiowozie, w innym pomieszczeniu, w
							znacznej odległości lub za przeszkodą.
						</li>
						<li>Aby móc prowadzić postać skorumpowaną trzeba skonsultować to wcześniej z administracją</li>
						<li>Podszywanie się postaci pod członka organizacji publicznej jest zabronione</li>
						<li>Zakaz używania niewidzialnych ubrań znajdujących się w kreatorach</li>
						<li>Dzielenie się informacjami wewnątrzorganizacyjnymi z osobami trzecimi w formie OOC jest
							zabronione
						</li>
						<li>Administracja ma prawo do zmiany liderów frakcji publicznych bez podania przyczyny</li>
						<li>Organizacje porządkowe mają prawo do PowerGamingu w przypadkach skuwania, obezwładniania,
							prowadzenia oraz przeszukiwania osób, budynków i pojazdów
						</li>
					</ol>
				</li>
				
				<li><h4>§9. Kontakt z Administracją</h4>
					<ol>
						<li>Administracja nie jest zobowiązana do odpowiadania na prywatne wiadomości na Discord oraz
							forum
						</li>
						<li>Wiadomości chaotyczne, pozbawione szczegółów i rozczeniowe mogą zostać zignorowane bez
							poinformowania zgłaszającego
						</li>
						<li>Pospieszanie i wysyłanie tej samej wiadomości więcej niż jeden raz jest zabronione</li>
						<li>Podczas interwencji członka ekipy administracyjnej rozgrywka jest wstrzymywana</li>
					</ol>
				</li>
			</ol>
		</Container>;
	}
}