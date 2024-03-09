import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Work Smarter. Not Harder.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p>
              <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                Contate-nos
              </h3>
            </p>
            <ul>
              <li>
                <h2>
                  <p>
                    {" "}
                    <a href="mailto:sac@besmart.com.br">sac@besmart.com.br</a>
                  </p>
                </h2>
              </li>
              <li>
                <h2>
                  <p>
                    <a href="phone"> +55 (11)991475862</a>
                  </p>
                </h2>
              </li>
            </ul>
          </div>
        </div>
        <footer className="text-3x1 font-bold justify-center">
          <p>&copy; 2024 Be Smart LTDA. Todos os direitos reservados.</p>
        </footer>
      </Container>
    </footer>
  );
}

export default Footer;
