import { Check, Globe, PhoneCall } from 'lucide-react'
import { withLayout } from '../HOC/withLayout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

function Home() {

  return (

    <section className="w-full " >

      <div className="flex flex-col md:flex-row justify-start gap-4 px-4 py-4 text-sm">
        <div className="flex-1 flex items-center justify-center">
          <img src="./images/media/t_maestro.png" className="rounded-lg" />
        </div>

        <div className="flex-1">

          <h1 className="text-lg font-bold mb-6 md:text-left inline-flex items-center gap-2">
            <Globe className="h-5 w-5" />
            NUESTRA ESCUELA
          </h1>

          <p className="text-sm  text-center md:text-left">
            No se logra lo que no se practica. Por eso, ejercitando los principios inspirados en el taekwondo podrás elevar tu nivel de efectividad en cualquier campo. Si los transformas en preceptos para tu vida, adquirirás equilibrio, consciencia, fuerza y potencia para accionar y, a la vez, aumentarás la confianza en ti, el autocontrol, el enfoque y la humildad, virtudes aplicables a todos los aspectos de la vida. Entonces, no habrá nada ni nadie que te detenga.
          </p>
          <br />
          <Tabs defaultValue="princ1" >
            <TabsList>
              <TabsTrigger value="princ1">Cortesía</TabsTrigger>
              <TabsTrigger value="princ2">Integridad</TabsTrigger>
              <TabsTrigger value="princ3">Perseverancia</TabsTrigger>
              <TabsTrigger value="princ4">Control</TabsTrigger>
              <TabsTrigger value="princ5">Espíritu</TabsTrigger>
            </TabsList>

            <TabsContent value="princ1">
              <div className="flex justify-between p-4">
                <div className="p-3 w-1/3">
                  <img
                    src="./images/principios/t_principio_cortesia.jpg"
                    className="grayscale hover:grayscale-0 transition-all h-[300px]"
                  />
                </div>
                <div className="p-3 w-2/3">
                  <p className="text-sm  text-center md:text-left">
                    Los estudiantes del Taekwon-Do deben tratar de emplear los siguientes elementos de Cortesía para construir un carácter noble y para llevar a cabo el entrenamiento de manera ordenada.
                    <ul>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De promover el espíritu de integración mutua</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De sentir vergüenza por sus propios vicios, despreciando los de otros</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />  De ser cortés el uno con el otro</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De alentar el sentido de justicia y humanidad</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De distinguir el instructor del alumno, el superior del inferior y el mayor del menor</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De comportarse según las reglas de etiqueta</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De respetar los bienes ajenos</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De tratar todos los asuntos de manera justa y con sinceridad</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />De abstenerse a dar o aceptar dádivas cuando se tiene alguna duda</li>
                    </ul>
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="princ2">
              <div className="flex justify-between p-4">
                <div className="p-3 w-1/3">
                  <img
                    src="./images/principios/t_principio_integridad.jpg"
                    className="grayscale hover:grayscale-0 transition-all h-[300px]"
                  />
                </div>
                <div className="p-3 w-2/3">
                  <p className="text-sm  text-center md:text-left">
                    En el Taekwon-Do, la palabra Integridad tiene un significado más amplio del que aparece en el diccionario. Uno tiene que ser capaz de distinguir lo correcto de lo erróneo y tener sentido de culpabilidad si uno se ha equivocado. La siguiente lista nos da ejemplos de falta de Integridad:

                    <ul>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />El instructor que se desvirtúa y engaña a sí mismo y a su arte al enseñar técnicas impropias a sus alumnos por falta de conocimiento.</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />El alumno que se engaña a sí mismo o a otros «arreglando» los materiales de rotura antes de una exhibición.</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />El instructor que disfraza su mala técnica con salas de entrenamiento lujosas y adulación falsa a sus alumnos.</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />El alumno que le exige a su instructor un mayor grado o trata de comprarlo.</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />El alumno que sube de grado para alimentar su ego o para tener un sentido de poder.</li>
                      <li className="flex items-center"><Check className="text-green-500 mr-2" />El instructor que enseña y promueve su arte para obtener beneficio económico.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="princ3">
              <div className="flex justify-between p-4">
                <div className="p-3 w-1/3">
                  <img
                    src="./images/principios/t_principio_perseverancia.jpg"
                    className="grayscale hover:grayscale-0 transition-all h-[300px]"
                  />
                </div>
                <div className="p-3 w-2/3">
                  <p className="text-sm  text-center md:text-left">
                    En el Oriente existe un refrán antiguo: «La paciencia conduce a la virtud o al mérito». «Uno puede construir un hogar tranquilo al ser 100 veces paciente». Evidentemente, lo más probable es que la felicidad y la prosperidad lleguen a la persona paciente. Para lograr algo, sea un grado más alto o la perfección de la técnica, uno tiene que fijar su meta y después perseverar con constancia. <br /><br />Robert Bruce aprendió su lección de perseverancia observando los tenaces esfuerzos de una sencilla araña. Fue esta perseverancia y tenacidad la que finalmente le permitió liberar Escocia en el Siglo XIV. Uno de los secretos más importantes para llegar a ser un líder en el Taekwon-Do es superar cada dificultad con perseverancia.
                    <br /><br />
                    Confucio dijo: «Aquel que es impaciente en los asuntos triviales raramente puede llegar al éxito en asuntos de gran importancia».
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="princ4">
              <div className="flex justify-between p-4">
                <div className="p-3 w-1/3">
                  <img
                    src="./images/principios/t_principio_autocontrol.jpg"
                    className="grayscale hover:grayscale-0 transition-all h-[300px]"
                  />
                </div>
                <div className="p-3 w-2/3">
                  <p className="text-sm  text-center md:text-left">
                    Este principio es extremadamente importante tanto dentro como fuera del Dojang, sea en la manera como uno se conduce en la pelea libre o en sus asuntos personales en general.
                    <br /><br />
                    La pérdida del autocontrol en la lucha libre puede desembocar en un desastre tanto para el estudiante como para el oponente. Asimismo, la incapacidad de vivir o trabajar según sus propias concepciones y capacidades, es también una falta de autocontrol.
                    <br /><br />
                    De acuerdo a Lao Tzu «el poderoso o más fuerte es el que se vence a sí mismo y no el que vence a otro».
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="princ5">
              <div className="flex justify-between p-4">
                <div className="p-3 w-1/3">
                  <img
                    src="./images/principios/t_principio_espiritu.jpg"
                    className="grayscale hover:grayscale-0 transition-all h-[300px]"
                  />
                </div>
                <div className="p-3 w-2/3">
                  <p className="text-sm  text-center md:text-left">
                    «Aquí yacen 300, quienes cumplieron con su deber», un epitafio simple para uno de los actos de coraje más grandes conocidos por la humanidad.
                    <br /><br />
                    A pesar de enfrentarse a las fuerzas superiores de Jerjes, Leonidas y sus 300 Espartanos mostraron al mundo en Termópilas el significado del «espíritu indomable». Se demuestra cómo una valerosa persona y sus principios son exaltados al enfrentarse a desafíos abrumadores.
                    <br /><br />
                    Un estudiante serio del Taekwon-Do será siempre modesto y sincero en todo momento. Si es confrontado con la injusticia, se entenderá con el beligerante sin ningún temor o vacilación, con espíritu indomable, sin importarle quien o cuántos ellos sean.
                    <br /><br />
                    Confucio declaró: «es un acto de cobardía el callar contra la injusticia».
                  </p>
                </div>
              </div>
            </TabsContent>

          </Tabs>

        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 px-4 py-4 text-sm bg-purple-300">
        <h3 className="text-lg font-bold mb-6 md:text-center inline-flex items-center gap-2">
          "Clases de Taekwon-Do ITF Tradicional para niños, jóvenes y adultos. Certificación oficial. <br></br> Clase de prueba gratis en todos nuestros Centros de Instrucción Autorizados."
        </h3>

      </div>

      <div className="flex flex-col md:flex-row justify-start gap-4 px-4 py-4 text-sm">
        <div className="flex-1">
          <h1 className="text-lg font-bold mb-6 md:text-left inline-flex items-center gap-2">
            <PhoneCall className="h-5 w-5" />
            CONTÁCTENOS
          </h1>
          <p>¿Tienes alguna pregunta o necesitas informarte de un servicio de nuestra academia? Estamos aquí para ayudarte. Obtener asistencia escribiéndonos.</p><br />
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Tus Nombres"
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="titulo"
              placeholder="Titulo"
              className="border p-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje..."
              className="border p-2 rounded"
              rows={6}
            />
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-3 h-300px accent-blue-500" />
              <span className="text-gray-700">Acepto los términos y condiciones</span>
            </label>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="./images/media/t_contacto.jpg" className="rounded-lg" />
        </div>
      </div>

      <br />

      <div className="flex flex-col md:flex-row justify-center gap-4 px-4 py-4 text-sm bg-yellow-300 ">

        <div className="flex-1 flex items-center justify-center">
          <img src="./images/media/t_niños.jpg" className="rounded-lg" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-6 md:text-center inline-flex items-center gap-2">
            <br /><br /><br /><br /><br />TAEKWON-DO ITF <br />EL ARTE MARCIAL MÁS PODEROSO DEL MUNDO.
          </h3>
        </div>
      </div>

      <br />

      <div className="flex flex-col md:flex-row justify-center gap-4 px-4 py-4 text-sm">
        <div className="flex-1 flex items-center justify-center">
          <iframe
            width="600"
            height="340"
            src="https://www.youtube.com/embed/Sp1hff70HRs?si=LIv2757UOVfjVRac"
            title="YouTube video player"
            allowFullScreen
          ></iframe>

        </div>

        <div className="flex-1 flex items-center justify-center">
          <iframe
            width="600"
            height="340"
            src="https://www.youtube.com/embed/rDPN-ML5wKQ?si=JEYF6_lsCxb60LKI"
            title="YouTube video player"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>

  )
}

export default withLayout(Home)
