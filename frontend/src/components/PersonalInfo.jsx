const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <form className="flex flex-col items-center justify-center space-y-4">
      {[
        { label: 'Full Name', name: 'fullName' },
        { label: 'Email', name: 'email' },
        { label: 'Phone Number', name: 'phoneNumber' },
        { label: 'Home Address', name: 'homeAddress' },
        {
          label:
            'Landmark to lookout for when coming (e.g., a bus stop, junction, billboard, etc.)',
          name: 'landmark',
        },
      ].map(({ label, name }) => (
        <div key={name} className="w-[50rem]">
          <label className="text-[1.4rem] font-semibold block mb-3">
            {label}:
          </label>
          <input
            type="text"
            name={name}
            value={formData[name] || ''}
            onChange={e => setFormData({ ...formData, [name]: e.target.value })}
            className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
      ))}
    </form>
  );
};

export default PersonalInfo;
