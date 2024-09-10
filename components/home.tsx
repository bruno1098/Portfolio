'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { SVGProps, useEffect } from "react"

export function Home() {
  useEffect(() => {
  
    document.documentElement.classList.add("dark");

    function mudarTema() {
      const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(currentTheme);
    }

    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton?.addEventListener("click", mudarTema);

    return () => {
      themeToggleButton?.removeEventListener("click", mudarTema);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col min-h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        className="bg-primary text-primary-foreground dark:bg-background dark:text-foreground px-4 md:px-6 py-4 flex items-center justify-between"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="h-20 w-20 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
           <Avatar className="h-20 w-20 rounded-full">
              <AvatarImage src="https://avatars.githubusercontent.com/u/115303980?s=96&v=4" alt="Bruno Antunes" style={{ borderRadius: '50%' }} />
              <AvatarFallback>BA</AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="grid gap-0.5">
            <h1 className="text-lg font-semibold">Bruno Antunes</h1>
            <p className="text-sm text-muted-foreground">Estudante de Análise e Desenvolvimento de Sistemas</p>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </motion.header>

      <motion.main
        className="flex-1 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="about" className="py-15 md:py-24 bg-muted w-full">
          <motion.div
            className="container px-4 md:px-6 items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="space-y-4 items-center justify-center">
                <h1 className="text-4xl font-bold">Sobre</h1>

                <h5 className="text-2xl font-bold">Olá, me chamo Bruno.</h5>

                <p className="text-muted-foreground">
                  Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, com uma paixão genuína por tecnologia e inovação.
                  Tenho experiência prática em projetos acadêmicos e domínio de diversas tecnologias, como Java, C#, Spring Boot,
                  Azure DevOps, JavaScript, Kotlin, e ferramentas DevOps como Docker. Estou sempre buscando aplicar e aprimorar
                  meu conhecimento em desenvolvimento de software para criar soluções de alto impacto.
                </p>

                <p className="text-muted-foreground">
                  Ao longo da minha formação, desenvolvi projetos que abrangem desenvolvimento web, aplicativos móveis,
                  APIs RESTful, e integração com cloud e bancos de dados. Além disso, adquiri experiência com metodologias ágeis,
                  como Scrum, e práticas modernas de design e arquitetura de software. Estou entusiasmado com oportunidades que
                  me permitam crescer profissionalmente e colaborar em equipes focadas na criação de soluções tecnológicas
                  inovadoras.
                </p>

                <p className="text-muted-foreground">
                  Entre minhas principais competências estão a programação orientada a objetos (POO), arquitetura de software,
                  DevOps, análise de dados e gestão de projetos. Sou proativo, organizado e motivado a sempre aprender novas
                  tecnologias para entregar valor e resultados.
                </p>
              </div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold">My Skills</h2>
                <ul className="grid grid-cols-3 gap-2">
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">HTML</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">CSS</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">JavaScript</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">

                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="Java"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">Java</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                      alt="Spring Boot"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">Spring Boot</span>
                  </li>

                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                      alt="Kotlin"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">Kotlin</span>
                  </li>


                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                      alt="Azure DevOps"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">Azure DevOps</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                      alt="Docker"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">Docker</span>
                  </li>


                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      alt="PostgreSQL"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">PostgreSQL</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">Git</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                      alt="C#"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">C#</span>
                  </li>
                  <li className="bg-background rounded-md px-3 py-2 flex flex-col items-center">
                    <motion.img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      alt="SQL"
                      className="h-12 w-12"
                      whileHover={{ scale: 1.2 }}
                    />
                    <span className="mt-2">SQL</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-12 md:py-24 bg-background dark:bg-muted text-foreground dark:text-foreground">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >




              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">ReactApiGPT</h3>
                  <p className="text-muted-foreground">
                    ReactApiGPT é um projeto inovador desenvolvido durante o Challenge da Plusoft em parceria com a FIAP.
                    Utilizando tecnologias avançadas como React Native, Expo, Processamento de Linguagem Natural (NLP) e
                    Machine Learning.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Expo</Badge>
                    <Badge variant="secondary">NLP e Machine Learning</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://github.com/bruno1098/ReactApi"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    prefetch={false}
                  >
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">Expi</h3>
                  <p className="text-muted-foreground">
                    Expi é um sistema que utiliza processamento de linguagem natural para gerar análises de sentimentos de conversas em chatbots e ligações.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">NLP</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/bruno1098/expi" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">Deploy Brinquedo</h3>
                  <p className="text-muted-foreground">
                    API RESTful para gerenciar uma coleção de brinquedos, permitindo operações de CRUD e navegação via HATEOAS.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">Oracle</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/bruno1098/deployBrinquedo" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">Produtos MVC</h3>
                  <p className="text-muted-foreground">
                    Um sistema de gerenciamento de produtos, desenvolvido em arquitetura MVC utilizando Java e Spring.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Spring MVC</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/bruno1098/ProdutosMVC" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">Brinquedo API</h3>
                  <p className="text-muted-foreground">
                    API para gerenciamento de brinquedos com operações de CRUD, construída em Java e Spring Boot.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">Java</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/bruno1098/brinquedoApi" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">BlueGuard</h3>
                  <p className="text-muted-foreground">
                    Projeto focado na preservação dos oceanos, combinando IoT, IA e Big Data para monitoramento ambiental.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">IoT</Badge>
                    <Badge variant="secondary">Big Data</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/bruno1098/BlueGuard" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  {/* <motion.img
                    src="/placeholder.svg"
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full h-48"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                  /> */}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">Sprints Java Advanced</h3>
                  <p className="text-muted-foreground">
                    Repositório contendo exemplos e soluções de problemas avançados em Java, utilizando padrões modernos.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="https://github.com/bruno1098/Sprints-JavaAdvanced" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </motion.main>

      <motion.footer
        className="bg-muted text-white px-4 md:px-6 py-6 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-sm text-white">&copy; 2024 Bruno Antunes. All rights reserved.</p>
        <div className="flex gap-4 text-white">
          <Link href="https://github.com/bruno1098" className="hover:text-primary" prefetch={false}>
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/bruno-saantunes/" className="hover:text-primary" prefetch={false}>
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link href="mailto:cmp.1a.bruno.saantunes1@gmail.com" className="hover:text-primary" prefetch={false}>
            <MailIcon className="h-5 w-5" />
          </Link>
        </div>
      </motion.footer>
    </motion.div>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}





function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}



