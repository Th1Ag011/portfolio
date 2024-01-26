import { Motion } from "../../Shared-components/Motion/Motion.jsx";




export default function Carreira({ place, title, period, description }) {
  return (
    <Motion>
     <div className="container font-mono">
      <p className="text-gray-400 dark:text-blue-900/80 py-3">{place}</p>
      <h3 className="text-xl">{title}</h3>
      <p className="text-gray-400 dark:text-blue-900/80 py-3">{period}</p>
      <p className="mb-4">{description}</p>
      </div>
    </Motion>
  );
}
